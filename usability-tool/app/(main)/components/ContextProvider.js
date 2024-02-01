"use client";
import { useState, createContext, useContext } from "react";
import { userData } from "../UserData/UserData";

const dataContext = createContext();

export function getDataSuite() {
  return useContext(dataContext);
}

export function ContextProvider({ children }) {
  //First check if there's any data for the user in the database.
  //Next check if it's the most up to date data (cookies / localstorage?)
  //Set the first value to the most up to date user data
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
