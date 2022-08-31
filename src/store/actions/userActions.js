import { editUser, getUserInfo } from "../../api/firestoreResources";
import {
  registerAttempt,
  loginAttempt,
  logoutAttempt,
} from "../../api/firebaseAuth";
import { formatDate } from "../../helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadAvatar } from "../../api/firebaseStorage";

export const getUser = createAsyncThunk("user/getUser", async (uID) => {
  const {
    bio,
    type,
    date_of_register,
    posts,
    name,
    surname,
    email,
    profile_picture,
  } = await getUserInfo(uID);
  const dateOfRegisterObject = formatDate(date_of_register.toDate());

  return {
    uID,
    name,
    surname,
    email,
    bio,
    type: +type,
    date_of_register: dateOfRegisterObject,
    posts,
    profilePicture: profile_picture,
  };
});

export const userEdit = createAsyncThunk(
  "user/userEdit",
  async ({ uID, avatar, ...props }) => {
    if (avatar) {
      const profile_picture = await uploadAvatar({ uID, file: avatar });
      await editUser({ uID, profile_picture, ...props });
    } else {
      await editUser({ uID, ...props });
    }

    const {
      bio,
      type,
      date_of_register,
      posts,
      name,
      surname,
      email,
      profile_picture,
    } = await getUserInfo(uID);

    const dateOfRegisterObject = formatDate(date_of_register.toDate());

    return {
      uID,
      name,
      surname,
      email,
      bio,
      type: +type,
      date_of_register: dateOfRegisterObject,
      posts,
      profilePicture: profile_picture,
    };
  }
);

export const logIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password }) => {
    const userId = await loginAttempt({ email, password });
    const {
      bio,
      type,
      date_of_register,
      posts,
      name,
      surname,
      profile_picture,
    } = await getUserInfo(userId);

    const dateOfRegisterObject = formatDate(date_of_register.toDate());

    return {
      uID: userId,
      name,
      surname,
      email,
      bio,
      type: +type,
      date_of_register: dateOfRegisterObject,
      posts,
      profilePicture: profile_picture,
    };
  }
);

export const register = createAsyncThunk(
  "user/register",
  async ({ name, surname, password, email }) => {
    const userId = await registerAttempt({ name, surname, password, email });

    const { bio, type, date_of_register, posts, profile_picture } =
      await getUserInfo(userId);

    const dateOfRegisterObject = formatDate(date_of_register.toDate());

    return {
      uID: userId,
      name,
      surname,
      email,
      bio,
      type: +type,
      date_of_register: dateOfRegisterObject,
      posts,
      profilePicture: profile_picture,
    };
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  await logoutAttempt();

  return {};
});
