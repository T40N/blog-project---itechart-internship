import { getPosts, insertPost, deletePost } from "../../api/firestoreResources";
import { getAllPosts, removePost, editPost } from "../slices/postsSlice";
import { formatDate } from "../../helpers";

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

      dispatch(
        getAllPosts({
          posts,
        })
      );
    } catch (err) {
      throw err;
    }
  };
};

export const newPost = ({ uID, title, content }) => {
  return async (dispatch) => {
    await insertPost({ uID, title, content });

    const posts = (await getPosts()).map((post) => {
      return {
        id: post.id,
        userId: post.u_id,
        title: post.title,
        content: post.content,
        dateOfCreation: formatDate(post.date_of_creation.toDate()),
      };
    });

    dispatch(
      getAllPosts({
        posts,
      })
    );
  };
};

export const postDelete = (postId) => {
  return async (dispatch) => {
    try {
      await deletePost(postId);

      dispatch(
        removePost({
          postId,
        })
      );
    } catch (err) {
      throw err;
    }
  };
};

export const postEdit = ({ postId, ...props }) => {
  return async (dispatch) => {
    try {
      await editPost({ postId, ...props });

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

        dispatch(
          getAllPosts({
            posts,
          })
        );
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  };
};
