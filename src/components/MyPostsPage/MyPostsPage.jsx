import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { TitleContainer, TitleIcons, PostsContainer } from "./styled";
import { useEffect } from "react";
import { Icon } from "../shared";

export default function MyPostsPage() {
  const user = useSelector((state) => state.user);

  const posts = useSelector((state) => state.posts);
  const [userPosts, setUserPosts] = useState(null);


  useEffect(() => {
    setUserPosts(posts.filter((post) => post.userId === user.uID));
  }, []);

  return (
    <PostsContainer>
      {userPosts && userPosts.map((post) => {
        return (
          <TitleContainer key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.dateOfCreation}</p>
            <TitleIcons>
              <Icon>delete</Icon>
              <Icon>edit</Icon>
              <Icon>arrow_forward</Icon>
            </TitleIcons>
          </TitleContainer>
        );
      })}
    </PostsContainer>
  );
}
