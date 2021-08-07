import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";
import BookmarksScreen from "../screens/BookmarksScreen";

interface MainTabsProps {}

const Tab = createMaterialTopTabNavigator();

export const MainTabs: FC<MainTabsProps> = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarIndicatorStyle: {
          height: 0,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-search" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-bookmark" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
