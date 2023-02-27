import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Style } from "./style";
import { useEffect, useState } from "react";
import { Box } from "../../components/Box";

export function Search() {
  const [movie, setMovie] = useState("");
  const [listMovie, setListMovie] = useState([]);

  function createListMovie() {
    const API = `https://api.themoviedb.org/3/search/movie?api_key=dfe68602b34df2dbb9c6c15dcfea7dfe&language=pt-BR&query=${movie}&page=1&include_adult=false`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => setListMovie(data.results));
  }

  return (
    <View style={Style.Container}>
      <View style={Style.containerSearch}>
        <TextInput
          style={Style.InputStyle}
          placeholder="Pesquise pelo seu filme"
          placeholderTextColor="#000"
          value={movie}
          onChangeText={(e) => {
            setMovie(e);
          }}
        />
        <TouchableOpacity style={Style.buttonSearch} onPress={createListMovie}>
          <Text style={Style.title}>Ok</Text>
        </TouchableOpacity>
      </View>

      <View style={Style.containerMovie}>
        <FlatList
          data={listMovie}
          ListEmptyComponent={() => <Text style={Style.title}>Sem filme</Text>}
          renderItem={({ item }) => {
            return <Box isFire={false} data={item} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
}
