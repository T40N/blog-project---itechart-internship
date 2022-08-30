import { postsSlice, userSlice, handlerSlice } from "./slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    handlers: handlerSlice.reducer,
    posts: postsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
