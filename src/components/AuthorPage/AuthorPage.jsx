import { useParams } from "react-router-dom";
import {
  AuthorContainer,
  BaseInfo,
  GridAvatar,
  Bio,
  ViewContainer,
  PostsContainer,
  TitleContainer,
  TitleIcon,
} from "./styled";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { getUserInfo } from "../../api/firestoreResources";
import { formatDate } from "../../helpers";

export default function AuthorPage() {
  const { id } = useParams();

  const [author, setAuthor] = useState(null);
  useEffect(() => {
    getUserInfo(id).then((info) => {
      setAuthor(info);
      console.log(author);
    });
  }, []);

  const posts = useSelector((state) => state.posts);
  const [authorPosts, setAuthorPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    setAuthorPosts(posts.filter((post) => post.userId === id));
  }, []);

  const PostsTitles = () => {
    console.log(posts);
    return authorPosts.map((post) => {
      return (
        <TitleContainer key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.dateOfCreation}</p>
          <TitleIcon>arrow_forward</TitleIcon>
        </TitleContainer>
      );
    });
  };

  return (
    <ViewContainer>
      {author && (
        <>
          <AuthorContainer>
            <GridAvatar link={author.profile_picture} />
            <BaseInfo>
              <h3>
                {author.name} {author.surname}
              </h3>
              <p>Joined at {formatDate(author.date_of_register.toDate())}</p>
              <div></div>
              <h3>{author.type}</h3>
              <p>Posts: {authorPosts.length}</p>
            </BaseInfo>
            <Bio>
              <p>{author.bio}</p>
            </Bio>
          </AuthorContainer>
          <PostsContainer>{PostsTitles()}</PostsContainer>
        </>
      )}
    </ViewContainer>
  );
}
