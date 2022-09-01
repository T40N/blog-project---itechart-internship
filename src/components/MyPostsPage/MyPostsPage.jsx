import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import {
  TitleContainer,
  TitleIcons,
  PostsContainer,
  MyPostIcon,
} from "./styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPostsPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const posts = useSelector((state) => state.posts);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    setUserPosts(posts.filter((post) => post.userId === user.uID));
  }, []);

  return (
    <PostsContainer>
      {userPosts.length === 0 && <h3>You have no posts</h3>}
      {userPosts.length !== 0 &&
        userPosts.map((post) => {
          return (
            <TitleContainer key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.dateOfCreation}</p>
              <TitleIcons>
                <MyPostIcon onClick={() => navigate(`/blogs/${post.id}`)}>
                  arrow_forward
                </MyPostIcon>
              </TitleIcons>
            </TitleContainer>
          );
        })}
    </PostsContainer>
  );
}
