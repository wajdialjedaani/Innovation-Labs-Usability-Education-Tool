import { app } from "./firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import errCodeToMessage from "../tools/errCodeToMsg";
//Cloud Firestore stores data in Documents, which are stored in Collections
//const x = await addToDB("users", user.uid, {...})
const db = getFirestore(app);

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
  try {
    result = await setDoc(
      doc(db, "users", userID, "HeuristicData", `Heuristic${heuristicID}`),
      data,
      { merge: true }
    );
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
