import React from "react";
import { CategoriesContextProvider } from "./src/context/Categories.context";
import { CountryContextProvider } from "./src/context/Country.context";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { FirstVisitContextProvider } from "./src/context/FirstVisit.context";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Routes from "./src/navigation/Routes";
import { HomeNewsContextProvider } from "./src/context/HomeNews.context";
import { NewsByCategoryContextProvider } from "./src/context/NewsByCategory.context";
import { BookmarksContextProvider } from "./src/context/Bookmarks.context";
import { SearchedNewsContextProvider } from "./src/context/SearchedNews.context";

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
      <FirstVisitContextProvider>
        <BookmarksContextProvider>
          <CountryContextProvider>
            <CategoriesContextProvider>
              <HomeNewsContextProvider>
                <NewsByCategoryContextProvider>
                  <SearchedNewsContextProvider>
                    <Routes />
                  </SearchedNewsContextProvider>
                </NewsByCategoryContextProvider>
              </HomeNewsContextProvider>
            </CategoriesContextProvider>
          </CountryContextProvider>
        </BookmarksContextProvider>
      </FirstVisitContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
