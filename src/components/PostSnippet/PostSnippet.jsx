import { Container, Snippet, LinkStyled, TitleBox, AuthorLink } from "./styled";
import Avatar from "../shared/Avatar.styled";
import { getUserInfo } from "../../api/firestoreResources";
import { useEffect, useState } from "react";

function shorten(str, maxLen, separator = ".") {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export default function Post({ blog }) {
  const authorId = blog.userId;
  

  const [authorInfo, setAuthorInfo] = useState(null);
  useEffect(() => {
    getUserInfo(authorId).then((info) => setAuthorInfo(info));
  }, []);

  return (
    <Container key={blog.id}>
      <AuthorLink to={`/author/${authorId}`}>
        <Avatar link={authorInfo ? authorInfo.profile_picture : ""}/>
        {authorInfo && <h2>{authorInfo.name + " " + authorInfo.surname}</h2>}
      </AuthorLink>
      <Snippet>
        <TitleBox>
          <h2>{blog.title}</h2>
          <p>{blog.dateOfCreation}</p>
        </TitleBox>
        <p>{shorten(blog.content, 300) + "."}</p>
        <LinkStyled to={`/blogs/${blog.id}`}>
          <p>Read more </p>
          <span>arrow_forward</span>
        </LinkStyled>
      </Snippet>
    </Container>
  );
}