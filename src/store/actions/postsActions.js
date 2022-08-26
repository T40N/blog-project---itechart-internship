import { addPost, removePost, editPost } from "../slices/postsSlice";

export const newPost = ({ userId, title, content }) => {
  return async (dispatch) => {
    const postID = await addPostFirebase({ userId, title, content });

    const post = await getPostFirebase(postID);

    dispatch(
      addPost({
        post,
      })
    );
  };
};

export const removePost = (postId) => {
  return async (dispatch) => {
    await removePostFirebase(postId);

    dispatch(
      removePost({
        postId,
      })
    );
  };
};

export const editPost = ({ postId, title, content }) => {
  await editPostFirebase({ postId, title, content })

  const editedPost = getPostFirebase(postId);

  dispatch(
    editPost({
      post: editedPost
    })
  )
};
