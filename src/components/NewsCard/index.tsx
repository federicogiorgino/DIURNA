import React, { FC } from "react";
import { Button, Card } from "react-native-paper";
import { News } from "../../@types/news";
import Spacer from "../Spacer";
import * as WebBrowser from "expo-web-browser";
import CustomText from "../CustomText";
import BookmarkButton from "../BookmarkButton";
import moment from "moment";

interface NewsCardProps {
  news: News;
}
const NewsCard: FC<NewsCardProps> = ({ news }) => {
  return (
    <Card style={{ marginVertical: 10 }}>
      <Card.Cover source={{ uri: news.urlToImage }} />
      <Spacer height={20} />
      <Card.Content>
        <CustomText variant="title" style={{ fontSize: 24 }}>
          {news.title}
        </CustomText>
        <Spacer height={10} />
        <CustomText variant="paragraph">{news.description}</CustomText>
        <Spacer height={10} />
        <CustomText variant="paragraph">
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
  );
};

export default NewsCard;
