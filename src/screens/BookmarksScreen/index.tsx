import React, { useContext } from "react";
import { View, FlatList, Image } from "react-native";

import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";
import Row from "../../components/Row";
import Page from "../../components/Page";

import { styles } from "./styles";
import { CategoriesContext } from "../../context/Categories.context";

const BookmarksScreen = () => {
  return (
    <SafeArea>
      <Page>
        <Row marginBottom={30}>
          <CustomText variant="title">Bookmarks</CustomText>
        </Row>
      </Page>
    </SafeArea>
  );
};

export default BookmarksScreen;
