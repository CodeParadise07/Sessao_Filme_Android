import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

const image_path = "https://image.tmdb.org/t/p/w500";

export function BoxRated(data: any) {
  const navigation = useNavigation();

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
          source={{ uri: `${image_path}${data.data.backdrop_path}` }}
        />
      </View>
    </TouchableOpacity>
  );
}
