import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F1F1F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 300,
    maxHeight: 300,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 32,
  },
  overview: {
    color: "#fff",
  },
  vote_average: {
    color: "#9332D6",
  },
});

export function Box(data: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.data.title}</Text>
      <Text style={styles.overview}>{data.data.overview}</Text>
      <Text style={styles.vote_average}>{data.data.vote_average}</Text>
    </View>
  );
}
