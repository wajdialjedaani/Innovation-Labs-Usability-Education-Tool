//toastify

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as _onAuthStateChanged,
  sendPasswordResetEmail as _sendPasswordResetEmail,
  updateProfile,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "./firebase";
import errCodeToMessage from "../tools/errCodeToMsg";

setPersistence(auth, inMemoryPersistence);

export function onAuthStateChanged(callback = () => {}) {
  return _onAuthStateChanged(auth, callback);
}

export async function sendPasswordResetEmail(email) {
  let result;
  try {
    result = await _sendPasswordResetEmail(auth, email);
  } catch (e) {
    throw errCodeToMessage(e.code);
  }

  return result;
}

export async function createAccount(email, password, firstname, lastname) {
  let result, error;
  result = error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName: `${firstname} ${lastname}`,
    });
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
