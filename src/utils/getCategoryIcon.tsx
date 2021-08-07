import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  Entypo,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";

export const getCategoryIcon = (category: string, color: string) => {
  switch (category) {
    case "health":
      return (
        <MaterialCommunityIcons name="hospital-box" size={24} color={color} />
      );
    case "entertainment":
      return <Ionicons name="md-tv" size={24} color={color} />;
    case "general":
      return <Feather name="globe" size={24} color={color} />;
    case "science":
      return <MaterialIcons name="science" size={24} color={color} />;
    case "business":
      return <FontAwesome5 name="funnel-dollar" size={20} color={color} />;
    case "science":
      return (
        <MaterialCommunityIcons name="hospital-box" size={24} color={color} />
      );
    case "sports":
      return <MaterialIcons name="sports-basketball" size={24} color={color} />;
    case "technology":
      return <Entypo name="tablet-mobile-combo" size={24} color={color} />;
    default:
      return null;
  }
};
