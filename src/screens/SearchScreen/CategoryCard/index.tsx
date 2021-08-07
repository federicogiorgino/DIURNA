import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Category } from "../../../@types/category";

import { styles } from "./styles";

interface CategoryCardProps {
  category: Category;
}
const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ByCategorySearchResultsScreen", {
          category: category.name,
        })
      }
    >
      <Image source={{ uri: category.image }} style={styles.image} />
      <View style={styles.imageOverlay}>
        <Text style={styles.text}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
