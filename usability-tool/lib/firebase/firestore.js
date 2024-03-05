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
  collection,
  getDocsFromCache,
  arrayUnion,
} from "firebase/firestore";
import errCodeToMessage from "../tools/errCodeToMsg";
const db = initializeFirestore(app, { localCache: persistentLocalCache() });

export async function addHeuristicData(heuristicID, userID, data) {
  console.log(data);
  let result = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "HeuristicData",
    `Heuristic${heuristicID}`
  );
  try {
    await updateDoc(docRef, {
      attemptCount: increment(1),
      attempts: arrayUnion(data),
    });
  } catch (e) {
    throw errCodeToMessage(e.code);
  }

  return result;
}

// export async function addHeuristicData(heuristicID, userID, data) {
//   let result, error;
//   result = error = null;
//   const docRef = doc(
//     db,
//     "users",
//     userID,
//     "HeuristicData",
//     `Heuristic${heuristicID}`
//   );
//   try {
//     const { time: newTime } = data;
//     delete data.time;
//     result = await setDoc(docRef, data, { merge: true });
//     await updateDoc(docRef, {
//       attempts: increment(1),
//       time: arrayUnion(newTime),
//     });
//   } catch (e) {
//     throw errCodeToMessage(e.code);
//   }

//   return result;
// }

export async function readHeuristicData(heuristicID, userID) {
  let result, error, data;
  result = error = data = null;
  try {
    result = await getDocFromCache(
      doc(db, "users", userID, "HeuristicData", `Heuristic${heuristicID}`)
    );
    data = result.data();
  } catch (e) {
    error = errCodeToMessage(e.code);
    console.error(error);
  }

  return { result, error, data };
}

export async function readAllHeuristicData(userId) {
  const collectionRef = collection(db, "users", userId, "HeuristicData");
  let result;
  try {
    result = await getDocsFromCache(collectionRef);
    console.log(result);
    result.forEach((doc) => console.log(doc.data()));
  } catch (e) {
    throw errCodeToMessage(e.code);
  }
  return result;
}

export async function addUIData(heuristicID, userID, data) {
  let result, error;
  result = error = null;
  const docRef = doc(
    db,
    "users",
    userID,
    "UIBuilderData",
    `Heuristic${heuristicID}`
  );
  try {
    const { time: newTime } = data;
    delete data.time;
    result = await setDoc(docRef, data, { merge: true });
    await updateDoc(docRef, {
      attempts: increment(1),
      time: arrayUnion(newTime),
    });
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

  return { data };
}
