import React, { FC, useContext } from "react";
import { FlatList } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";
import Row from "../../components/Row";
import Page from "../../components/Page";
import CategoriesPickerTile from "../../components/CategoryPickerTile";

import { CategoriesContext } from "../../context/Categories.context";
import { styles } from "./styles";

interface SettingsCategoriesScreenProps {
  navigation: any;
}

const SettingsCategoriesScreen: FC<SettingsCategoriesScreenProps> = ({
  navigation,
}) => {
  const { categories } = useContext(CategoriesContext);
  const { colors } = useTheme();

  return (
    <SafeArea>
      <Page>
        <Row marginBottom={15}>
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <CustomText variant="appbar">Choose your interests</CustomText>
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            color="transparent"
          />
        </Row>
        <FlatList
          renderItem={({ item }) => <CategoriesPickerTile category={item} />}
          data={categories}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
      </Page>
    </SafeArea>
  );
};

export default SettingsCategoriesScreen;
