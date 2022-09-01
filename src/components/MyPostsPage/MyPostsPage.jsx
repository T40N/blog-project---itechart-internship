import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState } from "react";
import {
  TitleContainer,
  TitleIcons,
  PostsContainer,
  MyPostIcon,
} from "./styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postDelete, postsGet } from "../../store/actions/postsActions";

export default function MyPostsPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => post.userId === user.uID);

    if (filteredPosts.length === 0) {
      setUserPosts(false);
      return;
    }

    setUserPosts(filteredPosts);
  }, [posts]);

  const onDeleteHandler = (id) => {
    dispatch(postDelete(id)).then(() => {
      dispatch(postsGet());
    });
  };
  
  return (
    <PostsContainer>
      {userPosts ? (
        userPosts.map((post) => {
          return (
            <TitleContainer key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.dateOfCreation}</p>
              <TitleIcons>
                <MyPostIcon onClick={() => navigate(`/blogs/${post.id}`)}>
                  arrow_forward
                </MyPostIcon>
                <MyPostIcon onClick={() => onDeleteHandler(post.id)}>
                  delete
                </MyPostIcon>
              </TitleIcons>
            </TitleContainer>
          );
        })
      ) : (
        <h3>You have no posts!</h3>
      )}
    </PostsContainer>
  );
}
