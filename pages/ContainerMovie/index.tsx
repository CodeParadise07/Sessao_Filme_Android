import { ScrollView, View, ImageBackground, Image, Text } from "react-native";
import { Styles } from "./style";
import { useState, useEffect } from "react";

export function ContainerMovie(props: Object) {
  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const id = props.route.params.id;
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=en-US`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <ScrollView style={Styles.scrollBg}>
      <View style={Styles.container}>
        <Text style={Styles.titleMovie}>{movie.title}</Text>

        <ImageBackground
          resizeMode="contain"
          style={Styles.bgImg}
          source={{ uri: `${image_path}${movie.backdrop_path}` }}
        />
        <Image
          resizeMode="contain"
          style={Styles.cardMovie}
          source={{ uri: `${image_path}${movie.poster_path}` }}
        />
        <View style={Styles.containerInfo}></View>
      </View>
    </ScrollView>
  );
}
