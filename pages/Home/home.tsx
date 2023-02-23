import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Box } from "../../components/Box";
import { BoxRated } from "../../components/BoxRated";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const randomMovie = Math.ceil(Math.random() * 1000);

  console.log(randomMovie);

  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate("movie", {
      id: randomMovie,
    });
  }

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [recommedation, setRecommendation] = useState({});

  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setPopular(data.results));

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR&page=1"
    )
      .then((response) => response.json())
      .then((data) => setTopRated(data.results));

    fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setRecommendation(data));
  }, []);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1f1f1f",
      color: "#fff",
    },
    title: {
      color: "#fff",
      alignItems: "center",
      fontSize: 24,
      padding: 10,
      fontStyle: "bold",
    },
    bgBannerRecommedation: {
      height: 400,
      width: "100%",
      opacity: 0.2,
      position: "relative",
    },
    bgTitle: {
      position: "absolute",
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 30,
      marginLeft: 30,
    },
  });

  let showImageMovie = `${image_path}${recommedation.poster_path}`;

  return (
    <ScrollView>
      <View style={style.container}>
        <View>
          <Text style={style.title}>Recomendação</Text>
          <View>
            <TouchableOpacity onPress={handleClick}>
              <ImageBackground
                resizeMode="contain"
                style={style.bgBannerRecommedation}
                source={{ uri: showImageMovie }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={style.title}>Filmes Populares</Text>
          <FlatList
            horizontal={true}
            data={popular}
            ListEmptyComponent={() => <Text>Ninguem chegou</Text>}
            renderItem={({ item }) => {
              return <Box data={item} />;
            }}
          ></FlatList>
        </View>

        <View>
          <Text style={style.title}>Filmes melhores avalidos</Text>
          <FlatList
            horizontal={true}
            data={topRated}
            ListEmptyComponent={() => <Text>Ninguem chegou</Text>}
            renderItem={({ item }) => {
              return <BoxRated data={item} />;
            }}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );
}
