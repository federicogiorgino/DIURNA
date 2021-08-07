import React, { useState, createContext, FC, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Category } from "../@types/category";
import { categories } from "../data/categories";

type CategoriesContextState = {
  categories: Category[];
  selectedCategories: Category[];
  addCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
};

const contextDefaultValue: CategoriesContextState = {
  categories: categories,
  selectedCategories: [] as Category[],
  addCategory: () => {},
  removeCategory: () => {},
};

export const CategoriesContext =
  createContext<CategoriesContextState>(contextDefaultValue);

export const CategoriesContextProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(
    contextDefaultValue.categories
  );
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    contextDefaultValue.selectedCategories
  );

  const saveCategories = async (value: Category[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@DIURNA-selectedCategories`, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCategories = async () => {
    try {
      const value = await AsyncStorage.getItem("@DIURNA-selectedCategories");
      if (value !== null) {
        setSelectedCategories(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = (categoryToAdd: Category) => {
    setSelectedCategories([...selectedCategories, categoryToAdd]);
  };

  const removeCategory = (categoryToRemove: Category) => {
    setSelectedCategories(
      selectedCategories.filter(
        (selectedCategory) => selectedCategory.name !== categoryToRemove.name
      )
    );
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    saveCategories(selectedCategories);
  }, [selectedCategories]);

  return (
    <CategoriesContext.Provider
      value={{ categories, selectedCategories, addCategory, removeCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
