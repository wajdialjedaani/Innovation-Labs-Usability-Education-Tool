import { app } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  initializeFirestore,
  persistentLocalCache,
  updateDoc,
  increment,
  getDocFromCache,
  getDocsFromCache,
  arrayUnion,
} from "firebase/firestore";
import errCodeToMessage from "../tools/errCodeToMsg";
const db = initializeFirestore(app, { localCache: persistentLocalCache() });

export async function addHeuristicData(heuristicID, userID, data) {
  let result = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "HeuristicData",
    `Heuristic${heuristicID}`
  );

  try {
    await setDoc(
      docRef,
      {
        attemptCount: increment(1),
        attempts: arrayUnion(data),
      },
      { merge: true }
    );
  } catch (e) {
    throw errCodeToMessage(e.code);
  }

  return result;
}

export async function readHeuristicData(heuristicID, userID) {
  let result = null;
  let data = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "HeuristicData",
    `Heuristic${heuristicID}`
  );
  try {
    result = await getDoc(docRef);
    data = result.data();
  } catch (e) {
    throw errCodeToMessage(e.code);
  }

  return data;
}

export async function addUIData(heuristicID, userID, data) {
  let result = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "UIBuilderData",
    `Heuristic${heuristicID}`
  );
  try {
    await setDoc(
      docRef,
      {
        attemptCount: increment(1),
        attempts: arrayUnion(data),
      },
      { merge: true }
    );
  } catch (e) {
    throw errCodeToMessage(e.code);
  }

  return result;
}

export async function readUIData(heuristicID, userID) {
  let result, error, data;
  result = error = data = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "UIBuilderData",
    `Heuristic${heuristicID}`
  );
  try {
    result = await getDoc(docRef);
    data = result.data();
  } catch (e) {
    throw errCodeToMessage(e.code);
  }

  return data;
}

export async function getMetadata(userID) {
  let result, data;
  result = data = null;
  const docRef = doc(db, "users", userID);
  try {
    result = await getDoc(docRef);
    data = result.data() || {
      completedHeuristics: new Array(10).fill(0), //0 means havent started. 1 means you're on the quiz. 2 Means you're on the UI builder. 3 Means you've done everything
      lastHeuristic: 0,
    };
  } catch (e) {
    throw errCodeToMessage(e.code);
  }
  return data;
}

export async function updateMetadata(userID, newMetadata) {
  let result = null;
  const docRef = doc(db, "users", userID);
  try {
    result = await setDoc(docRef, newMetadata, { merge: true });
  } catch (e) {
    throw e.errCodeToMessage;
  }
  return result;
}
