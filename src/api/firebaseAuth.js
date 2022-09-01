import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { insertUser } from "./firestoreResources";

export const isUserLoggedIn = async () => {
  return new Promise((resolve) => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      unsubscribe();
      if (!currentUser) {
        resolve(false);
      } else {
        resolve(currentUser.uid);
      }
    });
  });
};

export const registerAttempt = async ({ name, surname, email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await insertUser({ uID: user.uid, name, surname, email });
    return user.uid;
  } catch (err) {
    throw err;
  }
};

export const loginAttempt = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user.uid;
  } catch (err) {
    throw err;
  }
};

export const logoutAttempt = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    throw err;
  }
};
