import axios, { AxiosResponse } from "axios";
import React, { useState, createContext, FC, useEffect } from "react";
import { News } from "../@types/news";

type HomeNewsContextState = {
  news: News[];
  isLoading: boolean;
  error: boolean;
  fetchNews: (country: string) => void;
};

const contextDefaultValue: HomeNewsContextState = {
  news: [],
  isLoading: false,
  error: false,
  fetchNews: () => {},
};

export const HomeNewsContext =
  createContext<HomeNewsContextState>(contextDefaultValue);

export const HomeNewsContextProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(
    contextDefaultValue.isLoading
  );
  const [error, setError] = useState<boolean>(contextDefaultValue.error);
  const [news, setNews] = useState<News[]>(contextDefaultValue.news);

  const fetchNews = async (country: string) => {
    setIsLoading(true);
    setError(false);
    const URI = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=100&apiKey=7258262e3af2474c8968ee10aa29a66b`;

    try {
      const response: AxiosResponse = await axios.get(URI);
      setNews(response.data.articles);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <HomeNewsContext.Provider value={{ isLoading, error, news, fetchNews }}>
      {children}
    </HomeNewsContext.Provider>
  );
};
