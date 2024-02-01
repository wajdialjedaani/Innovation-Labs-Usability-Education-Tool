import { app } from "./firebase";
import {getFirestore, doc, setDoc} from "firebase/firestore"
import errCodeToMessage from "../tools/errCodeToMsg";
//Cloud Firestore stores data in Documents, which are stored in Collections
const db = getFirestore(app)
export async function addToDB(collection, id, data) {
    let result, error
    result = error = null;
    try {
        result = await setDoc(doc(db, collection, id), data, {merge: true})
    }catch(e) {
        error = errCodeToMessage(e.code)
        console.error(error)
    }

    return {result, error}
}

export async function readDB(collection, id) {
    let result, error
    result = error = null;
    try {
        //result = read db document
    }catch(e) {
        error = errCodeToMessage(e.code)
        console.error(error)
    }
    return {result, error}
}

export async function readFromDB(user) {

}