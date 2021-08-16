import React, { FC, useContext } from "react";
import { useEffect } from "react";
import {
  ActivityIndicator,
  StatusBar,
  FlatList,
  Dimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import CenteredPage from "../../components/CenteredPage";
import Page from "../../components/Page";
import HomeNewsCard from "../../components/HomeNewsCard";
import SafeArea from "../../components/SafeArea";

import { CountryContext } from "../../context/Country.context";
import { HomeNewsContext } from "../../context/HomeNews.context";

import { styles } from "./styles";

interface HomeScreenProps {}

const { height } = Dimensions.get("screen");

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { colors } = useTheme();
  const { selectedCountry } = useContext(CountryContext);
  const { isLoading, news, fetchNews } = useContext(HomeNewsContext);

  const FLATLISTSNAPPOINT = height - 80;

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
      {/* <Page> */}
      <FlatList
        data={news}
        renderItem={({ item }) => <HomeNewsCard news={item} />}
        keyExtractor={(item) => item.url.toString()}
        showsVerticalScrollIndicator={false}
        decelerationRate={0}
        snapToAlignment="center"
        snapToInterval={FLATLISTSNAPPOINT}
        scrollEventThrottle={16}
      />
      {/* </Page> */}
    </SafeArea>
  );
};

export default HomeScreen;
