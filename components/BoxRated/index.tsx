import { View, StyleSheet, Image } from "react-native";

const image_path = "https://image.tmdb.org/t/p/w500";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  banner: {
    height: 300,
    width: 300,
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

export function BoxRated(data: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: `${image_path}${data.data.backdrop_path}` }}
      />
    </View>
  );
}
