import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Box } from "../../components/Box";
import { BoxRated } from "../../components/BoxRated";
import { useNavigation } from "@react-navigation/native";
import { style } from "./Style";

export function Home() {
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

  interface recommedationAPI {
    backdrop_path: String;
  }

  //UseStates
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [recommedation, setRecommendation] = useState<recommedationAPI>({
    backdrop_path: "",
  });

  //Pegar numero aleatorio
  let randomMovie = Math.ceil(Math.random() * 1000);

  const navigation = useNavigation();

  const image_path = "https://image.tmdb.org/t/p/w500";

  let showImageMovie = `${image_path}${recommedation.backdrop_path}`;

  function handleClick() {
    navigation.navigate("movie", {
      id: randomMovie,
    });
  }

  return (
    <ScrollView>
      <View style={style.container}>
        <View>
          <Text style={style.title}>Recomendação</Text>
          <View>
            <TouchableOpacity onPress={handleClick}>
              <ImageBackground
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
