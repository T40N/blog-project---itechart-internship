import { Container, Author, Snippet, LinkStyled } from "./styled";
import { Link } from "react-router-dom";
import useFetch from "../../pages/useFetch";

function shorten(str, maxLen, separator = ".") {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export default function Post({ blog }) {
  console.log(blog);

  return (
    <Container key={blog.id}>
      <Author>
        <h2>{blog.author}</h2>
      </Author>
      <Snippet>
        <h2>{blog.title}</h2>
        <p>{blog.date}</p>
        <p>{shorten(blog.body, 300) + "."}</p>
        <LinkStyled to={`/blogs/${blog.id}`}>
          Read more <span>arrow_forward</span>
        </LinkStyled>
      </Snippet>
    </Container>
  );
}
