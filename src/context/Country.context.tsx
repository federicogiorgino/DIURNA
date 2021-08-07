import React, { useState, createContext, FC, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CountryContextState = {
  selectedCountry: string;
  selectCountry: (country: string) => void;
};

const contextDefaultValue: CountryContextState = {
  selectedCountry: "",
  selectCountry: () => {},
};

export const CountryContext =
  createContext<CountryContextState>(contextDefaultValue);

export const CountryContextProvider: FC = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    contextDefaultValue.selectedCountry
  );

  const loadSelectedCountry = async () => {
    try {
      const value = await AsyncStorage.getItem(`@COGNI/selectedCountry`);
      if (value !== null) {
        setSelectedCountry(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const saveSelectedCountry = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@COGNI/selectedCountry`, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const selectCountry = (country: string) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    loadSelectedCountry();
  }, []);

  useEffect(() => {
    saveSelectedCountry(selectedCountry);
  }, [selectedCountry]);

  return (
    <CountryContext.Provider value={{ selectedCountry, selectCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
