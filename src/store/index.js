import postsSlice from "./slices/postsSlice";
import userSlice from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import handlerSlice from "./slices/handlerSlice";

const store = configureStore({
  reducer: {
    handlers: handlerSlice.reducer,
    posts: postsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
