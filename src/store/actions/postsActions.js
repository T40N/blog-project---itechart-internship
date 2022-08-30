import {
  getPosts,
  insertPost,
  deletePost,
  editPost,
} from "../../api/firestoreResources";
import { formatDate } from "../../helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
