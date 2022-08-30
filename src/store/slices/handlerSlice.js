import { createSlice } from "@reduxjs/toolkit";
import {
  postDelete,
  postEdit,
  postsGet,
  searchPosts,
} from "../actions/postsActions";
import {
  getUser,
  logIn,
  logOut,
  register,
  userEdit,
} from "../actions/userActions";

const extraReducersBuilder = (asyncThunk, builder) => {
  for (const key in asyncThunk) {
    switch (key) {
      case "fulfilled":
        builder.addCase(asyncThunk[key], () => {
          return {
            isLoading: false,
            isError: false,
          };
        });
        break;
      case "rejected":
        builder.addCase(asyncThunk[key], () => {
          return {
            isLoading: false,
            isError: true,
          };
        });
        break;
      case "pending":
        builder.addCase(asyncThunk[key], () => {
          return {
            isLoading: true,
            isError: false,
          };
        });
        break;
    }
  }
};

const arrayOfThunks = [
  postDelete,
  postEdit,
  postsGet,
  getUser,
  logIn,
  logOut,
  register,
  userEdit,
  searchPosts,
];

const initialState = {
  isLoading: true,
  isError: false,
};

const handlerSlice = createSlice({
  name: "handlers",
  initialState,
  reducers: {
    reset(state, action) {
      return {
        isLoading: false,
        isError: false,
      };
    },
  },
  extraReducers: (builder) => {
    arrayOfThunks.forEach((thunk) => {
      extraReducersBuilder(thunk, builder);
    });
  },
});

export const { reset } = handlerSlice.actions;
export default handlerSlice;
