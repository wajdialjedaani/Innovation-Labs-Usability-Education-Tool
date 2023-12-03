"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { userData } from "../UserData/UserData";

const dataContext = createContext();

export function getDataSuite() {
  return useContext(dataContext);
}

export function ContextProvider({ children }) {
  const [dataState, setDataState] = useState(userData);
  console.log(dataState);
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
