import postsSlice from "./slices/postsSlice";
import userSlice from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
