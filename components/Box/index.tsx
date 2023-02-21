import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 20,
  },
  banner: {
    height: 300,
    width: 200,
    borderRadius: 5,
    position: "relative",
  },
  titleHot: {
    fontSize: 50,
    textAlign: "left",
    marginRight: 10,
    position: "absolute",
    top: -20,
    left: -20,
  },
});

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
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.banner}
          source={{ uri: `${image_path}${data.data.poster_path}` }}
        />
        <Text style={styles.titleHot}>&#128293;</Text>
      </View>
    </TouchableOpacity>
  );
}
