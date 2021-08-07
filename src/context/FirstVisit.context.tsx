import React, { useState, createContext, FC, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type FirstVisitContextState = {
  isFirstVisit: boolean;
  setFirstVisitToFalse: () => void;
};

const contextDefaultValue: FirstVisitContextState = {
  isFirstVisit: true,
  setFirstVisitToFalse: () => {},
};
export const FirstVisitContext =
  createContext<FirstVisitContextState>(contextDefaultValue);

export const FirstVisitContextProvider: FC = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(
    contextDefaultValue.isFirstVisit
  );

  const setFirstVisitToFalse = () => {
    setIsFirstVisit(false);
  };

  const saveFirstVisit = async (value: boolean) => {
    try {
      const stringifiedValue = value === true ? "true" : "false";
      await AsyncStorage.setItem("@DIURNA-firstVisit", stringifiedValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadFirstVisit = async () => {
    try {
      const value = await AsyncStorage.getItem(`@DIURNA-firstVisit`);

      if (value === "true") {
        setIsFirstVisit(true);
      } else if (value === "false") {
        setIsFirstVisit(false);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFirstVisit();
  }, []);

  useEffect(() => {
    saveFirstVisit(isFirstVisit);
  }, [isFirstVisit]);

  return (
    <FirstVisitContext.Provider value={{ isFirstVisit, setFirstVisitToFalse }}>
      {children}
    </FirstVisitContext.Provider>
  );
};
