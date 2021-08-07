import React, { FC, useContext, useState } from "react";
import { useEffect } from "react";
import { ActivityIndicator, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CenteredPage from "../../components/CenteredPage";
import Page from "../../components/Page";
import SafeArea from "../../components/SafeArea";

import { CountryContext } from "../../context/Country.context";
import { SearchedNewsContext } from "../../context/SearchedNews.context";

import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import Row from "../../components/Row";
import NewsCard from "../../components/NewsCard";

interface SearchResultsScreenProps {
  route: any;
  navigation: any;
}

const SearchResultsScreen: FC<SearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const { colors } = useTheme();
  const { category } = route.params;
  const { selectedCountry } = useContext(CountryContext);
  const { searchedNews, isLoading, fetchSearchedNews } =
    useContext(SearchedNewsContext);

  useEffect(() => {
    fetchSearchedNews(category);
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
          data={searchedNews}
          renderItem={({ item }) => <NewsCard news={item} />}
          keyExtractor={(item) => item.url.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Page>
    </SafeArea>
  );
};

export default SearchResultsScreen;
