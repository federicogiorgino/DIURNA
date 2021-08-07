import React, { FC, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { BookmarksContext } from "../../context/Bookmarks.context";
import { News } from "../../@types/news";
import { styles } from "./styles";

type BookmarkButtonProps = {
  news: News;
  size?: number;
};

const BookmarkButton: FC<BookmarkButtonProps> = ({ news, size }) => {
  const { bookmarks, addNews, removeNews } = useContext(BookmarksContext);
  const { colors } = useTheme();
  const isFavourite = bookmarks.find((bookmark) => bookmark.url === news.url);

  return (
    <TouchableOpacity
      onPress={() => (!isFavourite ? addNews(news) : removeNews(news))}
      style={styles.buttonContainer}
    >
      <Ionicons
        name={isFavourite ? "bookmark" : "bookmark-outline"}
        size={size}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
