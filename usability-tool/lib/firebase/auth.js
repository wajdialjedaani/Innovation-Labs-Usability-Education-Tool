import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "./firebase";

export async function createAccount(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(`Error Creating Account ${error.errorCode}`);
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(`Error Signing Out ${error.errorCode}`);
  }
}
