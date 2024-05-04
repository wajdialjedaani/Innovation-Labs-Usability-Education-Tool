import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config";

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
