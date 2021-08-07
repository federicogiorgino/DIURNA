import React, { useState, createContext, FC, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { News } from "../@types/news";

type BookmarksContextState = {
  bookmarks: News[];
  addNews: (news: News) => void;
  removeNews: (news: News) => void;
};

const contextDefaultValue: BookmarksContextState = {
  bookmarks: [],
  addNews: () => {},
  removeNews: () => {},
};

export const BookmarksContext =
  createContext<BookmarksContextState>(contextDefaultValue);

export const BookmarksContextProvider: FC = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<News[]>(
    contextDefaultValue.bookmarks
  );

  const saveBookmarks = async (value: News[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@DIURNA-bookmarks`, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadBookmarks = async () => {
    try {
      const value = await AsyncStorage.getItem(`@DIURNA-bookmarks`);
      if (value !== null) {
        setBookmarks(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNews = (news: News) => {
    setBookmarks([...bookmarks, news]);
  };

  const removeNews = (news: News) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.url !== news.url));
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  useEffect(() => {
    saveBookmarks(bookmarks);
  }, [bookmarks]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, addNews, removeNews }}>
      {children}
    </BookmarksContext.Provider>
  );
};
