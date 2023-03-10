import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    color: "#fff",
  },
  bgSearch: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  searchTitle: {
    color: "#fff",
    marginLeft: 10,
  },
  title: {
    color: "#fff",
    alignItems: "center",
    fontSize: 24,
    padding: 10,
    fontStyle: "bold",
  },
  bgBannerRecommedation: {
    height: 400,
    width: "100%",
    opacity: 0.2,
    position: "relative",
  },
  bgTitle: {
    position: "absolute",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 30,
  },
});
