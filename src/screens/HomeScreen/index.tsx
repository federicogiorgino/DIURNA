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
import { HomeNewsContext } from "../../context/HomeNews.context";

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { colors } = useTheme();
  const { selectedCountry } = useContext(CountryContext);
  const { isLoading, news, fetchNews } = useContext(HomeNewsContext);

  useEffect(() => {
    fetchNews(selectedCountry);
  }, [selectedCountry]);

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
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsCard news={item} />}
          keyExtractor={(item) => item.url.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Page>
    </SafeArea>
  );
};

export default HomeScreen;
