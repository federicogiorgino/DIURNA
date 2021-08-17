import React, { FC } from "react";
import * as WebBrowser from "expo-web-browser";
import { View } from "react-native";
import { Button, Card } from "react-native-paper";
import moment from "moment";

import Spacer from "../Spacer";
import CustomText from "../CustomText";
import BookmarkButton from "../BookmarkButton";

import { News } from "../../@types/news";

import { styles } from "./styles";

interface HomeNewsCardProps {
  news: News;
}

const HomeNewsCard: FC<HomeNewsCardProps> = ({ news }) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: news.urlToImage }} style={styles.image} />
        <Spacer height={20} />
        <Card.Content>
          <CustomText
            variant="title"
            style={{ fontSize: 24 }}
            numberOfLines={3}
          >
            {news.title.split(" - ")[0]}
          </CustomText>
          <Spacer height={10} />
          <CustomText variant="paragraph" numberOfLines={6}>
            {news.description}
          </CustomText>
          <Spacer height={10} />
          <CustomText variant="paragraph" numberOfLines={1}>
            {moment(news.publishedAt).fromNow()} - {news.source.name}
          </CustomText>
        </Card.Content>
        <Card.Actions style={{ justifyContent: "space-between" }}>
          <Button onPress={() => WebBrowser.openBrowserAsync(news.url)}>
            READ MORE
          </Button>
          <BookmarkButton news={news} size={30} />
        </Card.Actions>
      </Card>
    </View>
  );
};

export default HomeNewsCard;
