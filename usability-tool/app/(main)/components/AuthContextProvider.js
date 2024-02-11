"use client";
//Iron Session
import { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
const AuthContext = createContext({});

export function getAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.replace("/home");
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <h1>Loading</h1> : children}
    </AuthContext.Provider>
  );
}
