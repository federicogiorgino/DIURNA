import React, { FC, useContext, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CenteredPage from "../../components/CenteredPage";
import Page from "../../components/Page";
import SafeArea from "../../components/SafeArea";
import Row from "../../components/Row";

import { CountryContext } from "../../context/Country.context";
import { NewsByCategoryContext } from "../../context/NewsByCategory.context";

import { styles } from "./styles";

interface ByCategorySearchResultsScreenProps {
  route: any;
  navigation: any;
}

const ByCategorySearchResultsScreen: FC<ByCategorySearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const { colors } = useTheme();
  const { category } = route.params;
  const { selectedCountry } = useContext(CountryContext);
  const { newsByCategory, isLoading, fetchNewsByCategory } = useContext(
    NewsByCategoryContext
  );

  useEffect(() => {
    fetchNewsByCategory(selectedCountry, category);
  }, [category]);

  if (isLoading)
    return (
      <SafeArea>
        <CenteredPage>
          <ActivityIndicator size="large" color={colors.primary} />
        </CenteredPage>
      </SafeArea>
    );
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
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            color="transparent"
          />
        </Row>
        <FlatList
          data={newsByCategory}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.url.toString()}
        />
      </Page>
    </SafeArea>
  );
};

export default ByCategorySearchResultsScreen;
