import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    surname: "",
    email: "",
    bio: "",
    type: null,
    dateOfRegister: null,
    posts: [],
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
      };
    },
    removeUser(state, action) {
      return {
        id: "",
        name: "",
        surname: "",
        email: "",
        bio: "",
        type: null,
        dateOfRegister: null,
        posts: [],
      };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice;
