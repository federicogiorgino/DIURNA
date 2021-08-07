import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 5,
  },
  image: {
    height: 200,
    width: "100%",
  },
  imageOverlay: {
    backgroundColor: "rgba(188,71,73,0.4)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 26,
    textTransform: "capitalize",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,

    elevation: 5,
  },
});
