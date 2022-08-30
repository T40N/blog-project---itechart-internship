import { Container, Author, Snippet, LinkStyled, TitleBox } from "./styled";
import Avatar from "../shared/Avatar.styled";

function shorten(str, maxLen, separator = ".") {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export default function Post({ blog }) {
  console.log(blog);

  return (
    <Container key={blog.id}>
      <Author>
        <Avatar />
        <h2>{blog.author}</h2>
      </Author>
      <Snippet>
        <TitleBox>
          <h2>{blog.title}</h2>
          <p>{blog.date}03.06.1953</p>
        </TitleBox>
        <p>{shorten(blog.body, 300) + "."}</p>
        <LinkStyled to={`/blogs/${blog.id}`}>
          <p>Read more </p>
          <span>arrow_forward</span>
        </LinkStyled>
      </Snippet>
    </Container>
  );
}
