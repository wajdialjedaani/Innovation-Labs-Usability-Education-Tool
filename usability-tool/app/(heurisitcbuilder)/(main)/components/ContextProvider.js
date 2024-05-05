"use client";
import { useState, createContext, useContext } from "react";

import { getAuthContext } from "./AuthContextProvider";

const dataContext = createContext();

export function getDataSuite() {
  return useContext(dataContext);
}

export function ContextProvider({ children }) {
  const { user } = getAuthContext();

  const [dataState, setDataState] = useState(userData);
  const dataSuite = {
    dataState,
    updateDataState: (newData) => {
      setDataState(newData);
    },
  };
  return (
    <dataContext.Provider value={dataSuite}>{children}</dataContext.Provider>
  );
}
