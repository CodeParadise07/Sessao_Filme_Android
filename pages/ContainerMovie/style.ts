import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  scrollBg: {
    backgroundColor: "#1F1F1F",
  },
  container: {},
  titleMovie: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
  },
  bgImg: {
    marginBottom: 30,
    height: 220,
  },

  containerInfo: {
    bottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  containerText: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 30,
  },
  category: {
    color: "#ccc",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
    color: "#fff",
    textAlign: "justify",
    fontSize: 14,
    padding: 30,
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#9332D6",
    maxWidth: 100,
    padding: 20,
    marginHorizontal: "auto",
    borderRadius: 20,
  },
  buttonTitle: {
    color: "#fff",
    textAlign: "center",
  },
});
