import { auth, db } from './firebase';
import { collection, getDocs, addDoc, serverTimestamp, getDoc, doc, setDoc, onSnapshot, query, orderBy, deleteDoc, arrayUnion, updateDoc } from "firebase/firestore";
import { deleteUser } from 'firebase/auth';

export const insertUser = async ({ uID, name, surname, email }) => {
    try {
        const userRef = doc(db, "users", uID);

        await setDoc(userRef, {
            name,
            surname,
            email,
            bio: "",
            type: 1,
            date_of_register: serverTimestamp(),
            posts: []
        });
    } catch (err) {
        throw err;
    }
}

export const getUserInfo = async (uID) => {
    try {
        const userRef = doc(db, "users", uID);

        const user = (await getDoc(userRef)).data();
        return user;
    } catch (err) {
        throw err;
    }
}

export const getUsers = async () => {
    try {
        const usersRef = collection(db, "users");

        return (await getDocs(usersRef)).docs.map(user => user.data());
    } catch (err) {
        throw err;
    }
}

export const editUser = async ({ uID, ...props }) => {
    try {
        const userRef = doc(db, "users", uID);

        await updateDoc(userRef, {
            ...props
        });
    } catch (err) {
        throw err;
    }
}

export const deleteUserAccount = async (uID) => {
    // So far only user can delete himself
    try {
        const userRef = doc(db, "users", uID);

        await deleteUser(auth.currentUser);
        await deleteDoc(userRef);
    } catch (err) {
        throw err;
    }
}

export const insertPost = async ({ uID, title, content }) => {
    try {
        const postsRef = collection(db, 'posts');

        const { id } = await addDoc(postsRef, {
            u_id: uID,
            title,
            content,
            date_of_creation: serverTimestamp()
        });

        const userRef = doc(db, 'users', uID);
        await updateDoc(userRef, {
            posts: arrayUnion(id)
        });
    } catch (err) {
        throw err;
    }
}

export const getPosts = async () => {
    try {
        const postsRef = collection(db, 'posts');
        const firestoreQuery = query(postsRef, orderBy("date_of_creation", "desc"));

        return mapPosts(await getDocs(firestoreQuery));
    } catch (err) {
        throw err;
    }
}

export const getPost = async(pID) => {
    try {
        const postRef = doc(db, 'posts', pID);
        
        const post = (await getDoc(postRef)).data();
        return post;
    } catch(err) {
        throw err;
    }
}

export const subPosts = async (callback) => {
    const postsRef = collection(db, 'posts');
    const firestoreQuery = query(postsRef, orderBy("date_of_creation", "desc"));

    let unsubscribe = onSnapshot(firestoreQuery, (posts) => {
        callback(mapPosts(posts));
    });
    return unsubscribe;
}

export const deletePost = async (pID) => {
    try {
        const postRef = doc(db, "posts", pID);

        await deleteDoc(postRef);
    } catch (err) {
        throw err;
    }
}

export const editPost = async ({ pID, ...props }) => {
    try {
        const postRef = doc(db, "posts", pID);

        await updateDoc(postRef, {
            ...props
        });
    } catch (err) {
        throw err;
    }
}

export const insertComment = async ({ pID, uID, content }) => {
    try {
        const postRef = collection(db, 'posts', pID, 'comments');

        await addDoc(postRef, {
            u_id: uID,
            content,
            date: serverTimestamp()
        })
    } catch (err) {
        throw err;
    }
}

export const getComments = async (pID) => {
    try {
        const commentsRef = collection(db, 'posts', pID, 'comments');
        const firestoreQuery = query(commentsRef, orderBy('date', 'desc'));

        return (await getDocs(firestoreQuery)).docs.map(comment => comment.data());
    } catch (err) {
        throw err;
    }
}

export const deleteComment = async ({ pID, cID }) => {
    try {
        const commentRef = doc(db, 'posts', pID, 'comments', cID);

        await deleteDoc(commentRef);
    } catch (err) {
        throw err;
    }
}

// ???
export const addReply = async ({ pID, uID, content }) => {
    try {

    } catch (err) {

    }
}

const mapPosts = (posts) => {
    return posts.docs.map(post => {
        return { ...post.data(), id: post.id };
    });
}