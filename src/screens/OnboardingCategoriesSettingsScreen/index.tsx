import React, { FC, useContext } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

import Page from "../../components/Page";
import Row from "../../components/Row";
import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";

// import CategoryPickerTile from "../../components/CategoryPickerTile";
import { CategoriesContext } from "../../context/Categories.context";

import { styles } from "./styles";
import { FirstVisitContext } from "../../context/FirstVisit.context";
import CategoryPickerTile from "../../components/CategoryPickerTile";

const OnboardingCategoriesSettingsScreen: FC = () => {
  const { setFirstVisitToFalse } = useContext(FirstVisitContext);
  const { categories, selectedCategories } = useContext(CategoriesContext);
  const { colors } = useTheme();

  return (
    <SafeArea>
      <Page>
        <View style={{ flex: 5 }}>
          <Row marginBottom={10}>
            <CustomText variant="title">Select your interests</CustomText>
          </Row>

          <Row>
            <CustomText variant="body">
              Select your favourite categories of interest for easy access to
              related news.
            </CustomText>
          </Row>

          <FlatList
            style={{ marginVertical: 10 }}
            data={categories}
            renderItem={({ item }) => <CategoryPickerTile category={item} />}
            keyExtractor={(item) => item.name.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ height: 60 }}>
          <TouchableOpacity
            disabled={selectedCategories.length === 0}
            style={[
              styles.fab,
              {
                backgroundColor:
                  selectedCategories.length === 0 ? "grey" : colors.primary,
              },
            ]}
            onPress={() =>
              selectedCategories.length > 0 && setFirstVisitToFalse()
            }
          >
            <Text style={{ fontFamily: "Bold", fontSize: 16 }}>Done</Text>
          </TouchableOpacity>
        </View>
      </Page>
    </SafeArea>
  );
};

export default OnboardingCategoriesSettingsScreen;
