import {
  ScrollView,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { Styles } from "./style";
import { useState, useEffect } from "react";
import IconIo from "react-native-vector-icons/Ionicons";

export function ContainerMovie(props: Object) {
  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const id = props.route.params.id;
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  const star = movie.vote_average;
  const population = movie.popularity;

  return (
    <ScrollView style={Styles.scrollBg}>
      <View style={Styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={Styles.bgImg}
          source={{ uri: `${image_path}${movie.backdrop_path}` }}
        />

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
          <TouchableOpacity
            style={Styles.button}
            onPress={() =>
              movie.homepage != ""
                ? Linking.openURL(`${movie.homepage}`)
                : Alert.alert("Alerta", "Sem link para o trailer", [
                    {
                      text: "Ok",
                      style: "cancel",
                    },
                  ])
            }
          >
            <Text style={Styles.buttonTitle}>Assistir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
