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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { getUserInfo } from "../../api/firestoreResources";
import { formatDate } from "../../helpers";
import {useNavigate} from "react-router-dom"
import { formatDate, userType } from "../../helpers";

export default function AuthorPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState(null);
  const [err, setErr] = useState(false);
  const posts = useSelector((state) => state.posts);
  const [authorPosts, setAuthorPosts] = useState(null);
  useEffect(() => {
    getUserInfo(id)
      .then((info) => {
        setAuthor(info);
        setAuthorPosts(posts.filter((post) => post.userId === id));
      })
      .catch(() => {
        setErr(true);
      });
  }, [posts]);

  return (
    <ViewContainer>
      {err && !author && <h1>Author no longer exists</h1>}
      {author && authorPosts && (
        <>
          <AuthorContainer>
            <GridAvatar link={author.profile_picture} />
            <BaseInfo>
              <h3 id="name">
                {author.name} {author.surname}
              </h3>
              <p id="date">
                Joined at {formatDate(author.date_of_register.toDate())}
              </p>
              <div></div>
              <h3 id="type">{userType(author.type)}</h3>
              <p id="postNumber">Posts: {authorPosts.length}</p>
            </BaseInfo>
            <Bio>
              <p>{author.bio}</p>
            </Bio>
          </AuthorContainer>
          <PostsContainer>
            {authorPosts.map((post) => {
              return (
                <TitleContainer key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.dateOfCreation}</p>
                  <TitleIcon onClick={() => navigate(`/blogs/${post.id}`)}>
                  arrow_forward
                </TitleIcon>
                </TitleContainer>
              );
            })}
          </PostsContainer>
        </>
      )}
    </ViewContainer>
  );
}
