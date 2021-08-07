import React from "react";
import { CategoriesContextProvider } from "./src/context/Categories.context";
import { CountryContextProvider } from "./src/context/Country.context";
import { ThemeContextProvider } from "./src/context/Theme.context";
import Routes from "./src/navigation/Routes";

const App = () => {
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
