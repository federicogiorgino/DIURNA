import axios, { AxiosResponse } from "axios";
import React, { useState, createContext, FC, useEffect } from "react";
import { News } from "../@types/news";

type NewsByCategoryContextState = {
  newsByCategory: News[];
  isLoading: boolean;
  error: boolean;
  fetchNewsByCategory: (country: string, category: string) => void;
};

const contextDefaultValue: NewsByCategoryContextState = {
  newsByCategory: [],
  isLoading: false,
  error: false,
  fetchNewsByCategory: () => {},
};

export const NewsByCategoryContext =
  createContext<NewsByCategoryContextState>(contextDefaultValue);

export const NewsByCategoryContextProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(
    contextDefaultValue.isLoading
  );
  const [error, setError] = useState<boolean>(contextDefaultValue.error);
  const [newsByCategory, setNewsByCategory] = useState<News[]>(
    contextDefaultValue.newsByCategory
  );

  const fetchNewsByCategory = async (country: string, category: string) => {
    setIsLoading(true);
    setError(false);
    const URI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=7258262e3af2474c8968ee10aa29a66b`;

    try {
      const response: AxiosResponse = await axios.get(URI);
      setNewsByCategory(response.data.articles);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <NewsByCategoryContext.Provider
      value={{ isLoading, error, newsByCategory, fetchNewsByCategory }}
    >
      {children}
    </NewsByCategoryContext.Provider>
  );
};
