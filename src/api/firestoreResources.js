import { db } from './firebase';
import { collection, getDocs, addDoc, serverTimestamp, getDoc, doc, setDoc } from "firebase/firestore";

export const insertUser = async (uID, name, surname, email, password) => {
    try {
        await setDoc(doc(db, "users", uID), {
            name,
            surname,
            email,
            password,
            bio: "",
            type: 1,
            date_of_register: serverTimestamp(),
            posts: []
        });

    } catch (err) {
        alert(err.message);
        return undefined;
    }
}

export const getUserInfo = async (uID) => {
    try {
        const userRef = doc(db, "users", uID);
        const user = (await getDoc(userRef)).data();
        return user;
    } catch (err) {
        alert(err.message);
        return undefined;
    }
}