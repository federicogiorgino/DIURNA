import React, { FC } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { MainTabs } from "./Main.tabs";
import SettingsCountryScreen from "../screens/SettingsCountryScreen";
import SettingsCategoriesScreen from "../screens/SettingsCategoriesScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";

interface MainStackProps {}

const Stack = createStackNavigator();

export const MainStack: FC<MainStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="SettingsCountryScreen"
        component={SettingsCountryScreen}
      />
      <Stack.Screen
        name="SettingsCategoriesScreen"
        component={SettingsCategoriesScreen}
      />
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
      />
    </Stack.Navigator>
  );
};
