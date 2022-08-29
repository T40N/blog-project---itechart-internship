import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    type: 0,
    profilePicture:
      "https://firebasestorage.googleapis.com/v0/b/test-project-96eaa.appspot.com/o/avatars%2Fdefault.png?alt=media&token=adaa2a76-3cb1-44f3-9c0b-93c888758536",
  },
  reducers: {
    setUser(state, action) {
      return {
        id: action.payload.uID,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        bio: action.payload.bio,
        type: action.payload.type,
        dateOfRegister: action.payload.date,
        posts: action.payload.posts,
        profilePicture: action.payload.profilePicture,
      };
    },
    removeUser(state, action) {
      return {
        type: 0,
        profilePicture:
          "https://firebasestorage.googleapis.com/v0/b/test-project-96eaa.appspot.com/o/avatars%2Fdefault.png?alt=media&token=adaa2a76-3cb1-44f3-9c0b-93c888758536",
      };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice;
