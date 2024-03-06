"use client";
//Iron Session
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { onAuthStateChanged } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { getMetadata, readUIData } from "@/lib/firebase/firestore";
const AuthContext = createContext({});

export function getAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const fetchMetaData = async (user) => {
      try {
        const data = await getMetadata(user);
        setMetaData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    const unsub = onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchMetaData(user.uid);
      } else {
        setUser(null);
        router.replace("/home");
      }
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, metaData }}>
      {loading ? <h1>Loading</h1> : children}
    </AuthContext.Provider>
  );
}
