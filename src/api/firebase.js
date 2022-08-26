import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDznDGRYd_DuNPIhu0NgwrJTaGwlJnWy_w",
    authDomain: "test-project-96eaa.firebaseapp.com",
    projectId: "test-project-96eaa",
    storageBucket: "test-project-96eaa.appspot.com",
    messagingSenderId: "988929099617",
    appId: "1:988929099617:web:9c08f01fe049a5a209e720",
    measurementId: "G-YS70222C50"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);