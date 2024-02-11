import { app } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  initializeFirestore,
  persistentLocalCache,
  updateDoc,
  increment,
} from "firebase/firestore";
import errCodeToMessage from "../tools/errCodeToMsg";
//Cloud Firestore stores data in Documents, which are stored in Collections
//const x = await addToDB("users", user.uid, {...})
const db = initializeFirestore(app, { localCache: persistentLocalCache() });
// const db = getFirestore(app);

// export async function addToDB(collection, id, data) {
//   let result, error;
//   result = error = null;
//   try {
//     result = await setDoc(doc(db, ...collection, id), data, { merge: true });
//   } catch (e) {
//     error = errCodeToMessage(e.code);
//     console.error(error);
//   }

//   return { result, error };
// }

export async function addHeuristicData(heuristicID, userID, data) {
  let result, error;
  result = error = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "HeuristicData",
    `Heuristic${heuristicID}`
  );
  try {
    result = await setDoc(docRef, data, { merge: true });
    await updateDoc(docRef, { attempts: increment(1) });
  } catch (e) {
    error = errCodeToMessage(e.code);
    console.error(error);
  }

  return { result, error };
}

export async function readHeuristicData(heuristicID, userID) {
  let result, error, data;
  result = error = data = null;
  try {
    result = await getDoc(
      doc(db, "users", userID, "HeuristicData", `Heuristic${heuristicID}`)
    );
    console.log(result);
    data = result.data();
  } catch (e) {
    error = errCodeToMessage(e.code);
    console.error(error);
  }

  return { result, error, data };
}

export async function readDB(collection, id) {
  let result, error, data;
  result = error = data = null;
  try {
    result = await getDoc(doc(db, collection, id));
    data = result.data();
  } catch (e) {
    error = errCodeToMessage(e.code);
    console.error(error);
  }
  return { result, error, data };
}
