import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  Container: {
    backgroundColor: "#1F1F1F",
    flex: 1,
    padding: 30,
  },
  InputStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  containerSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
  InfoTitle: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontWeight: "bold",
  },
  buttonSearch: {
    backgroundColor: "#9332D6",
    padding: 15,
    marginLeft: 5,
    borderRadius: 5,
  },

  containerMovie: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    flex: 1,
  },
});
