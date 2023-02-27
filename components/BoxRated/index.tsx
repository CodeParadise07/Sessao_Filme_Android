import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export function BoxRated(data: any) {
  const navigation = useNavigation();
  const image_path = "https://image.tmdb.org/t/p/w500";

  function handleClick() {
    navigation.navigate("movie", {
      id: data.data.id,
    });
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={style.container}>
        <Image
          resizeMode="cover"
          style={style.banner}
          source={{ uri: `${image_path}${data.data.backdrop_path}` }}
        />
      </View>
    </TouchableOpacity>
  );
}
