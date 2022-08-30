import { createSlice } from "@reduxjs/toolkit";
import { postDelete, postEdit, postsGet } from "../actions/postsActions";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsGet.fulfilled, (state, action) => {
        return action.payload.posts;
      })
      .addCase(postDelete.fulfilled, (state, action) => {
        const filteredPosts = state.posts.filter(
          (post) => action.payload.postId !== post.id
        );

        return filteredPosts;
      })
      .addCase(postEdit.fulfilled, (state, action) => {
        return action.payload.posts;
      });
  },
});

export default postsSlice;
