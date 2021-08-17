import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
const FLATLISTSNAPPOINT: number = height - 80;

export const styles = StyleSheet.create({
  cardContainer: {
    height: FLATLISTSNAPPOINT,
    maxHeight: FLATLISTSNAPPOINT,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  card: { maxHeight: "90%" },
  image: { height: 350 },
});
