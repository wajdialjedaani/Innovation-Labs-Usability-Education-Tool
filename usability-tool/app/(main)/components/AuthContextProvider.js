"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "@/lib/firebase/auth";
const AuthContext = createContext({});

export function getAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return () => {
      onAuthStateChanged((user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
