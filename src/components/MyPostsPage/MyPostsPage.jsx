import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { TitleContainer, TitleIcon, PostsContainer } from "./styled";
import { useEffect } from "react";

export default function MyPostsPage() {

    const user = useSelector((state) => state.user);

    const posts = useSelector((state) => state.posts);
    const [userPosts, setUserPosts] = useState([]);
  
    console.log(posts);
  
    useEffect(() => {
      setUserPosts(posts.filter((post) => post.userId === user.uID));
      console.log('hejo')
    }, []);
  
    const PostsTitles = () => {
      console.log(posts);
      return userPosts.map((post) => {
        return (
          <TitleContainer key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.dateOfCreation}</p>
            <TitleIcon>arrow_forward</TitleIcon>
          </TitleContainer>
        );
      });
    };

    return(
      <PostsContainer>
        {PostsTitles}
      </PostsContainer>
    )
}