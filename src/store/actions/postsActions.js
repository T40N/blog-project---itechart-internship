import {
  getPosts,
  insertPost,
  deletePost,
  editPost,
} from "../../api/firestoreResources";
<<<<<<< HEAD
=======
import { getAllPosts, removePost } from "../slices/postsSlice";
>>>>>>> 6f88fdfd9314f3e70c02bee873f9bbaea4d96bd4
import { formatDate } from "../../helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

<<<<<<< HEAD
export const postsGet = createAsyncThunk("posts/postsGet", async () => {
  return (await getPosts()).map((post) => {
    return {
      id: post.id,
      userId: post.u_id,
      title: post.title,
      content: post.content,
      dateOfCreation: formatDate(post.date_of_creation.toDate()),
    };
  });
});
=======
export const postsGet = () => {
  return async (dispatch) => {
    try {
      const posts = (await getPosts()).map((post) => {
        return {
          id: post.id,
          userId: post.u_id,
          title: post.title,
          content: post.content,
          dateOfCreation: formatDate(post.date_of_creation.toDate()),
        };
      });
>>>>>>> 6f88fdfd9314f3e70c02bee873f9bbaea4d96bd4

export const newPost = createAsyncThunk(
  "posts/newPost",
  async ({ uID, title, content }) => {
    await insertPost({ uID, title, content });

    return {};
  }
);

export const postDelete = createAsyncThunk("posts/newPost", async (postId) => {
  await deletePost(postId);

  return {
    postId,
  };
});

export const postEdit = createAsyncThunk(
  "posts/postEdit",
  async ({ postId, ...props }) => {
    await editPost({ postId, ...props });

    return (await getPosts()).map((post) => {
      return {
        id: post.id,
        userId: post.u_id,
        title: post.title,
        content: post.content,
        dateOfCreation: formatDate(post.date_of_creation.toDate()),
      };
    });
  }
);
