import React from "react";
import { CategoriesContextProvider } from "./src/context/Categories.context";
import { CountryContextProvider } from "./src/context/Country.context";
import { ThemeContextProvider } from "./src/context/Theme.context";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Routes from "./src/navigation/Routes";

const App = () => {
  let [fontsLoaded] = useFonts({
    Light: Roboto_300Light,
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeContextProvider>
      <CountryContextProvider>
        <CategoriesContextProvider>
          <Routes />
        </CategoriesContextProvider>
      </CountryContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
