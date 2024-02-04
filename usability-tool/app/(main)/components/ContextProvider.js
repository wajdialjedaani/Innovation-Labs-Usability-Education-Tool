"use client";
import { useState, createContext, useContext } from "react";
import { userData } from "../UserData/UserData";

import { readDB } from "@/lib/firebase/firestore";
import { getAuthContext } from "./AuthContextProvider";

const dataContext = createContext();

export function getDataSuite() {
  return useContext(dataContext);
}

async function getUserData(user) {
  return await readDB("users", user?.uid);
}

export function ContextProvider({ children }) {
  const { user } = getAuthContext();
  //First check if there's any data for the user in the database.
  let userData = user ? getUserData(user) : null;

  // if (!userData) userData = fetch("test.json").then((res) => res.json());
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
