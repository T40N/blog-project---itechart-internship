import {
  getPosts,
  insertPost,
  deletePost,
  editPost,
} from "../../api/firestoreResources";
import { formatDate } from "../../helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (searchValue) => {
    if (searchValue === "") {
      const posts = (await getPosts()).map((post) => {
        return {
          id: post.id,
          userId: post.u_id,
          title: post.title,
          content: post.content,
          dateOfCreation: formatDate(post.date_of_creation.toDate()),
        };
      });
      return posts;
    }

    return { searchValue };
  }
);

export const postsGet = createAsyncThunk("posts/postsGet", async () => {
  const posts = (await getPosts()).map((post) => {
    return {
      id: post.id,
      userId: post.u_id,
      title: post.title,
      content: post.content,
      dateOfCreation: formatDate(post.date_of_creation.toDate()),
    };
  });
  return posts;
});

export const newPost = createAsyncThunk(
  "posts/newPost",
  async ({ uID, title, content }) => {
    try {
      await insertPost({ uID, title, content });
      console.log("thunk");
      return {};
    } catch (err) {
      console.log(err);
    }
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
