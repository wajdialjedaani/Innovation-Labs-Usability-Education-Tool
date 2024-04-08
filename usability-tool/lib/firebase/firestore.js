import { app } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  initializeFirestore,
  persistentLocalCache,
  getDocs,
  collection,
  updateDoc,
  increment,
  getDocFromCache,
  getDocsFromCache,
  arrayUnion,
  runTransaction,
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
    result = await runTransaction(db, async (transaction) => {
      const prevDoc = await transaction.get(docRef);
      if (!prevDoc.exists()) {
        transaction.set(docRef, {
          attemptCount: 1,
          attempts: [data],
        });
      } else {
        const Attempts = prevDoc.data().attempts;
        Attempts.push(data);

        transaction.update(docRef, {
          attemptCount: prevDoc.data().attemptCount + 1,
          attempts: Attempts,
        });
      }
    });
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
  console.log(docRef);
  try {
    result = await runTransaction(db, async (transaction) => {
      const prevDoc = await transaction.get(docRef);
      if (!prevDoc.exists()) {
        transaction.set(docRef, {
          attemptCount: 1,
          attempts: [data],
        });
      } else {
        const Attempts = prevDoc.data().attempts;
        Attempts.push(data);

        transaction.update(docRef, {
          attemptCount: prevDoc.data().attemptCount + 1,
          attempts: Attempts,
        });
      }
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

  return data;
}

export async function readAllData(userID) {
  const allData = {};
  try {
    const quizData = [];
    const quizDocs = await getDocs(
      collection(db, "users", userID, "HeuristicData")
    );
    quizDocs.forEach(
      (quiz) => (quizData[parseInt(quiz.id.match(/\d+$/)[0]) - 1] = quiz.data())
    );

    const uiData = [];
    const uiDocs = await getDocs(
      collection(db, "users", userID, "UIBuilderData")
    );
    uiDocs.forEach(
      (ui) => (uiData[parseInt(ui.id.match(/\d+$/)[0]) - 1] = ui.data())
    );

    allData["HeuristicData"] = quizData;
    allData["UIBuilderData"] = uiData;
  } catch (e) {
    throw errCodeToMessage(e.code);
  }
  return allData;
}

export async function getMetaDataFromDB(userID) {
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

export async function setMetaDataFromDB(userID, newMetadata) {
  let result = null;
  const docRef = doc(db, "users", userID);
  try {
    result = await setDoc(docRef, newMetadata, { merge: true });
  } catch (e) {
    throw e.errCodeToMessage;
  }
  return result;
}
