import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getAllPosts(state, action) {
      return action.payload.posts;
    },
    removePost(state, action) {
      const filteredPosts = state.posts.filter(
        (post) => action.payload.postId !== post.id
      );

      return filteredPosts;
    },
  },
});

export const { getAllPosts, removePost } = postsSlice.actions;
export default postsSlice;
