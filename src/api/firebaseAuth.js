import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

export const isUserLoggedIn = async() => {
    return new Promise((resolve, reject) => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            unsubscribe();
            resolve(!!currentUser);
        });
    });
}

export const registerAttempt = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user.uid;
    } catch (err) {
        alert(err.message);
        return undefined;
    }
}

export const loginAttempt = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user.uid;
    } catch (err) {
        alert(err.message);
        return undefined;
    }
}

export const logoutAttempt = async () => {
    try {
        await signOut(auth);
        return true;
    } catch(err) {
        alert(err.message);
        return false;
    }
}