import { Container, Author, Date, Snippet} from "./styled";

function shorten(str, maxLen, separator = '.') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

export default function Post({post}){

    const arrIndex = Number(index);
    const arrayStart = 3 * arrIndex - 3;
    const arrayEnd = 3 * arrIndex;

    const blogsOnPage = blogs.slice(arrayStart, arrayEnd);

    return(
        <>
        {blogsOnPage.map((blog) => ( //mapuje rodzic zmień ~~~~~~~~~~~~!!!!!!!!!
            <Container key={blog.id}>
                <Author>
                    <h2>{post.author}</h2>
                </Author>
                <Snippet>
                    <h2>{post.title}</h2>
                    <Date>{post.date}</Date>
                    <p>{shorten(blog.body, 300)+'.'}</p>
                    <Link to={`/blogs/${blog.id}`}>Read more</Link>
                </Snippet>
            </Container>
        ))}
    </>
    )
}