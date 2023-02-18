import { Text, StyleSheet, View } from "react-native";

export function Home() {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1f1f1f",
    },
    title: {
      color: "#fff",
      fontSize: 24,
    },
    icon: {
      height: 30,
      width: 30,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={style.container}>
      <View></View>
    </View>
  );
}
