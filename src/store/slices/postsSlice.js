import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getAllPosts(state, action) {
      state = action.payload.posts;
      return state;
    },
    removePost(state, action) {
      const filteredPosts = state.posts.filter(
        (post) => action.payload.postId !== post.id
      );

      state = filteredPosts;
      return state;
    },
  },
});

export const { getAllPosts, removePost } = postsSlice.actions;
export default postsSlice;
