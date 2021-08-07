import React, { FC, useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { OnboardingStack } from "./Onboarding.stack";
import { ThemeContext } from "../context/Theme.context";
import { FirstVisitContext } from "../context/FirstVisit.context";
import { MainStack } from "./Main.stack";

const Routes: FC = () => {
  const { isFirstVisit } = useContext(FirstVisitContext);
  const { theme, isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {isFirstVisit ? <OnboardingStack /> : <MainStack />}
        </NavigationContainer>
      </PaperProvider>
      <ExpoStatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};

export default Routes;
