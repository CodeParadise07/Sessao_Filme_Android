import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { style } from "./style";

export function Box(data: any) {
  const image_path = "https://image.tmdb.org/t/p/w500";
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
          resizeMode="contain"
          style={style.banner}
          source={{ uri: `${image_path}${data.data.backdrop_path}` }}
        />
        <Text style={style.titleHot}>&#128293;</Text>
      </View>
    </TouchableOpacity>
  );
}
