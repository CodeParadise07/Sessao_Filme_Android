import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Box } from "../../components/Box";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1f1f1f",
      color: "#fff",
    },
    title: {
      color: "#fff",
      fontSize: 24,
      padding: 10,
      fontStyle: "bold",
    },
  });

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Populares</Text>
        <FlatList
          horizontal={true}
          data={movies}
          ListEmptyComponent={() => <Text>Ninguem chegou</Text>}
          renderItem={({ item }) => {
            return <Box data={item} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
}
