import { db } from './firebase';
import { collection, getDocs, addDoc, serverTimestamp, getDoc, doc  } from "firebase/firestore";

export const insertUser = async (name, surname, email, password) => {
    try {
        const usersCollection = collection(db, "users");

        const { id } = await addDoc(usersCollection, {
            name,
            surname,
            email,
            password,
            bio: "",
            type: 1,
            date_of_register: serverTimestamp(),
            posts: []
        });

        return id;

    } catch(err) {
        alert(err.message);
        return undefined;
    }
}

export const getUserInfo = async (uID) => {
    try {
        const userRef = doc(db, "users", uID);
        const user = (await getDoc(userRef)).data();

        return user;
    } catch(err) {
        alert(err.message);
        return undefined;
    }
}

export const insertPost = async () => {
    
}