import React, { useContext } from "react";
import { FlatList } from "react-native";

import SafeArea from "../../components/SafeArea";
import Page from "../../components/Page";
import Row from "../../components/Row";
import CustomText from "../../components/CustomText";
import NewsCard from "../../components/NewsCard";

import { BookmarksContext } from "../../context/Bookmarks.context";

import { styles } from "./styles";

const BookmarksScreen = () => {
  const { bookmarks } = useContext(BookmarksContext);
  return (
    <SafeArea>
      <Page>
        <Row marginBottom={30}>
          <CustomText variant="title">Bookmarks</CustomText>
        </Row>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={bookmarks.reverse()}
          renderItem={({ item }) => <NewsCard news={item} />}
          keyExtractor={(item) => item.url.toString()}
        />
      </Page>
    </SafeArea>
  );
};

export default BookmarksScreen;
