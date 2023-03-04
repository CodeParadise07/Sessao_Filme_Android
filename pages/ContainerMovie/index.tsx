import {
  ScrollView,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { Styles } from "./style";
import { useState, useEffect } from "react";
import IconIo from "react-native-vector-icons/Ionicons";
import YoutubeIframe from "react-native-youtube-iframe";

interface movieAPI {
  id: Number;
  vote_average: Number;
  popularity: Number;
  title: String;
  backdrop_path: String;
  overview: String;
  homepage: String;
}

interface movieProps {
  route: {
    params: {
      id: String;
    };
  };
}

export function ContainerMovie(props: movieProps) {
  const [movie, setMovie] = useState<movieAPI>({
    id: 0,
    vote_average: 0,
    popularity: 0,
    title: "",
    backdrop_path: "",
    overview: "",
    homepage: "",
  });
  const [trailer, setTrailer] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const id = props.route.params.id;
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR`;
    const getTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR `;

    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovie(data));

    fetch(getTrailer)
      .then((response) => response.json())
      .then((data) => setTrailer(data.results[1].key));
  }, []);

  const star = movie.vote_average;
  const population = movie.popularity;

  return (
    <ScrollView style={Styles.scrollBg}>
      <View style={Styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={Styles.bgImg}
          source={{ uri: `${image_path}${movie.backdrop_path}` }}
        />

        <View style={Styles.trailer}>
          <YoutubeIframe
            videoId={trailer.toString()}
            height={300}
            width={400}
          />
        </View>

        <Text style={Styles.titleMovie}>{movie.title}</Text>

        <View style={Styles.containerInfo}>
          <View style={Styles.containerText}>
            <IconIo name="star" size={25} color="#FFD700" />
            <Text style={Styles.category}>{star}</Text>
          </View>

          <View style={Styles.containerText}>
            <IconIo name="people-sharp" size={25} color="#ccc" />
            <Text style={Styles.category}>{population}</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.description}>{movie.overview}</Text>
        </View>
        <View style={Styles.containerButton}>
          <TouchableOpacity style={Styles.button} onPress={() => saveMovie()}>
            <Text style={Styles.buttonTitle}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
