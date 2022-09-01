import { createSlice } from "@reduxjs/toolkit";
import {
  postDelete,
  postEdit,
  postsGet,
  searchPosts,
} from "../actions/postsActions";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsGet.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(postDelete.fulfilled, (state, action) => {
        const filteredPosts = state.filter(
          (post) => action.payload.postId !== post.id
        );

        return filteredPosts;
      })
      .addCase(postEdit.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        if (!action.payload.searchValue) {
          return action.payload;
        }

        const filteredPosts = state.filter((post) => {
          return (
            post.title
              .toLowerCase()
              .includes(action.payload.searchValue.toLowerCase()) ||
            post.content
              .toLowerCase()
              .includes(action.payload.searchValue.toLowerCase())
          );
        });

        return filteredPosts;
      });
  },
});

export default postsSlice;
