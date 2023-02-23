import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
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
