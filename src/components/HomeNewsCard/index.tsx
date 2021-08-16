import React, { FC } from "react";
import { Dimensions, StatusBar, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { News } from "../../@types/news";
import Spacer from "../Spacer";
import * as WebBrowser from "expo-web-browser";
import CustomText from "../CustomText";
import BookmarkButton from "../BookmarkButton";
import moment from "moment";

interface HomeNewsCardProps {
  news: News;
}

const { width, height } = Dimensions.get("screen");

const HomeNewsCard: FC<HomeNewsCardProps> = ({ news }) => {
  const FLATLISTSNAPPOINT = height - 80;

  return (
    <View
      style={{
        height: FLATLISTSNAPPOINT,
        maxHeight: FLATLISTSNAPPOINT,
        justifyContent: "center",
        marginHorizontal: 10,
      }}
    >
      <Card style={{ maxHeight: "90%" }}>
        <Card.Cover source={{ uri: news.urlToImage }} style={{ height: 350 }} />
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
