import { getPosts, insertPost } from "../../api/firestoreResources";
import { getAllPosts, removePost, editPost } from "../slices/postsSlice";
import { formatDate } from "../../helpers";

export const postsGet = () => {
  return async (dispatch) => {
    const posts = (await getPosts()).map((post) => {
      return {
        id: post.post_id,
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

export const newPost = ({ uID, title, content }) => {
  return async (dispatch) => {
    await insertPost({ uID, title, content });

    const posts = (await getPosts()).map((post) => {
      return {
        id: post.post_id,
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

// export const deletePost = (postId) => {
//   return async (dispatch) => {
//     await removePostFirebase(postId);

//     dispatch(
//       removePost({
//         postId,
//       })
//     );
//   };
// };

// export const postEdit = ({ postId, title, content }) => {
//   return async (dispatch) => {
//     await editPostFirebase({ postId, title, content });

//     const editedPost = getPostFirebase(postId);

//     dispatch(
//       editPost({
//         post: editedPost,
//       })
//     );
//   };
// };
