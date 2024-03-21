"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { getMetadata, updateMetadata } from "@/lib/firebase/firestore";
const AuthContext = createContext({});

export function getAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [metaData, setMetaData] = useState({});
  const [metaDataFetched, setMetaDataFetched] = useState(false);

  const metaDataSuite = {
    metaData,
    updateMetaData: (newMetaData) => {
      setMetaData(newMetaData);
    },
  };

  useEffect(() => {
    const fetchMetaData = async (user) => {
      try {
        setMetaDataFetched(false);
        const data = await getMetadata(user);
        setMetaData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
        setMetaDataFetched(true);
      }
    };
    const unsub = onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchMetaData(user.uid);
      } else {
        setUser(null);
        router.replace("/home");
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const update = async () => {
      console.log("Updating metadata: ", metaData);
      try {
        await updateMetadata(user.uid, metaData);
      } catch (e) {
        console.error(e);
      }
    };
    if (metaDataFetched) update();
  }, [metaData]);

  return (
    <AuthContext.Provider value={{ user, metaDataSuite }}>
      {loading ? <h1>Loading</h1> : children}
    </AuthContext.Provider>
  );
}
