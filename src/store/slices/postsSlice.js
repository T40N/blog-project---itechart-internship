import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload.post);
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

export const { addPost, removePost, editPost } = postsSlice.actions;
export default postsSlice;
