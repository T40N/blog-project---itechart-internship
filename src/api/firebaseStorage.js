import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { editUser } from "./firestoreResources";

export const uploadAvatar = async ({ uID, file }) => {
    try {
        const path = `avatars/${file.name}`;
        const storageRef = ref(storage, path)
        await uploadBytesResumable(storageRef, file);
        let avatar_link = await getDownloadURL(ref(storage, path));
        await editUser({ uID, avatar_link });
    } catch (err) {
        throw err;
    }
}