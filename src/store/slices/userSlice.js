import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  logIn,
  logOut,
  register,
  userEdit,
} from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    type: 0,
    profilePicture:
      "https://firebasestorage.googleapis.com/v0/b/test-project-96eaa.appspot.com/o/avatars%2Fdefault.png?alt=media&token=adaa2a76-3cb1-44f3-9c0b-93c888758536",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(userEdit.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        return action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logOut.fulfilled, () => {
        return {
          type: 0,
          profilePicture:
            "https://firebasestorage.googleapis.com/v0/b/test-project-96eaa.appspot.com/o/avatars%2Fdefault.png?alt=media&token=adaa2a76-3cb1-44f3-9c0b-93c888758536",
        };
      });
  },
});

export default userSlice;
