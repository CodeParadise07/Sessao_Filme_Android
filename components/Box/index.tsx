import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export function Box(data: any) {
  const navigation = useNavigation();
  const image_path = "https://image.tmdb.org/t/p/w500";

  //Função para chamar pagina de apenas um filme
  function handleClick() {
    navigation.navigate("movie", {
      id: data.data.id,
    });
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={style.container}>
        <Image
          style={style.banner}
          source={{ uri: `${image_path}${data.data.poster_path}` }}
        />
      </View>
    </TouchableOpacity>
  );
}
