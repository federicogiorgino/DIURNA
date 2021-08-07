import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme,
  DefaultTheme,
  ExtendedTheme,
} from "@react-navigation/native";

export const CustomDefaultTheme: ExtendedTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#ECE7EA",
    text: "#333333",
    primary: "#BC4749",
    secondary: "#ffffff",
    searchbar: "#ffffff",
  },
};

export const CustomDarkTheme: ExtendedTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#121212",
    text: "#ffffff",
    primary: "#BC4749",
    secondary: "#ffffff",
    searchbar: "#161a1d",
  },
};
