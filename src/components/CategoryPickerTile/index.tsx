import React, { FC, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import Row from "../Row";
import CustomText from "../CustomText";

import { CategoriesContext } from "../../context/Categories.context";
import { Category } from "../../@types/category";
import { getCategoryIcon } from "../../utils/getCategoryIcon";
import { styles } from "./styles";

interface CategoryPickerTileProps {
  category: Category;
}

const CategoryPickerTile: FC<CategoryPickerTileProps> = ({ category }) => {
  const { selectedCategories, addCategory, removeCategory } =
    useContext(CategoriesContext);

  const { colors } = useTheme();
  const isChosen = selectedCategories.find((cat) => cat.name === category.name);

  return (
    <TouchableOpacity
      onPress={() =>
        !isChosen ? addCategory(category) : removeCategory(category)
      }
    >
      <Row marginVertical={10} paddingVertical={10}>
        <View style={styles.leftTile}>
          {getCategoryIcon(category.name, colors.text)}
          <CustomText
            variant="body"
            style={{
              textTransform: "capitalize",
              marginLeft: 10,
              fontFamily: "Bold",
              fontSize: 18,
            }}
          >
            {category.name}
          </CustomText>
        </View>
        {isChosen && (
          <View style={[styles.button, { backgroundColor: colors.primary }]}>
            <Ionicons name="md-checkmark-sharp" size={15} color="white" />
          </View>
        )}
      </Row>
    </TouchableOpacity>
  );
};

export default CategoryPickerTile;
