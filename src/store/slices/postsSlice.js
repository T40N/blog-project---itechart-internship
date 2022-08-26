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

      state.posts = filteredPosts;
    },
    editPost(state, action) {
      const indexOfPostToEdit = state.posts
        .map((post) => post.id)
        .indexOf(action.payload.post.id);

      state.posts[indexOfPostToEdit] = action.payload.post;
    },
  },
});

export const { getAllPosts, removePost, editPost } = postsSlice.actions;
export default postsSlice;
