import axios, { AxiosResponse } from "axios";
import React, { useState, createContext, FC, useEffect } from "react";
import { News } from "../@types/news";

type SearchedNewsContextState = {
  searchedNews: News[];
  isLoading: boolean;
  error: boolean;
  fetchSearchedNews: (query: string) => void;
};

const contextDefaultValue: SearchedNewsContextState = {
  searchedNews: [],
  isLoading: false,
  error: false,
  fetchSearchedNews: () => {},
};

export const SearchedNewsContext =
  createContext<SearchedNewsContextState>(contextDefaultValue);

export const SearchedNewsContextProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(
    contextDefaultValue.isLoading
  );
  const [error, setError] = useState<boolean>(contextDefaultValue.error);
  const [searchedNews, setSearchedNews] = useState<News[]>(
    contextDefaultValue.searchedNews
  );

  const fetchSearchedNews = async (query: string) => {
    setIsLoading(true);
    setError(false);
    const URI = `https://newsapi.org/v2/top-headlines?q=${query}&pageSize=100&apiKey=7258262e3af2474c8968ee10aa29a66b`;

    try {
      const response: AxiosResponse = await axios.get(URI);
      setSearchedNews(response.data.articles);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <SearchedNewsContext.Provider
      value={{ isLoading, error, searchedNews, fetchSearchedNews }}
    >
      {children}
    </SearchedNewsContext.Provider>
  );
};
