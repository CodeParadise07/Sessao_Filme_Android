import { ScrollView, View } from "react-native";
import { Styles } from "./style";
import { useState, useEffect } from "react";

export function ContainerMovie(props: Object) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const id = props.route.params.id;
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=en-US`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovie(data));

    console.log(movie);
  }, []);

  console.log(movie);

  return (
    <ScrollView>
      <View style={Styles.container}></View>
    </ScrollView>
  );
}
