import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainTabs } from "./Main.tabs";
import { MainStackParams } from "../@types/navigation";

import SettingsCountryScreen from "../screens/SettingsCountryScreen";
import SettingsCategoriesScreen from "../screens/SettingsCategoriesScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import ByCategorySearchResultsScreen from "../screens/ByCategorySearchResultsScreen";

interface MainStackProps {}

const Stack = createStackNavigator<MainStackParams>();

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
      <Stack.Screen
        name="ByCategorySearchResultsScreen"
        component={ByCategorySearchResultsScreen}
      />
    </Stack.Navigator>
  );
};
