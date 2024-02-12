//toastify

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";
import errCodeToMessage from "../tools/errCodeToMsg";

export function onAuthStateChanged(callback = () => {}) {
  return _onAuthStateChanged(auth, callback);
}

export async function createAccount(email, password) {
  let result, error;
  result = error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw errCodeToMessage(e.code);
  }
  return { result, error };
}

export async function signIn(email, password) {
  let result, error;
  result = error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e.message, e.name, e.code);
    throw errCodeToMessage(e.code);
  }
  return { result, error };
}

export async function logOut() {
  let result, error;
  result = error = null;
  try {
    result = await signOut(auth);
  } catch (e) {
    throw errCodeToMessage(e.code);
  }
  return { result, error };
}
