import { Link } from "react-router-dom";

function shorten(str, maxLen, separator = '.') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

const PostsList = ( {blogs, title, index}) => {

    const arrIndex = Number(index);
    const arrayStart = 3 * arrIndex - 3;
    const arrayEnd = 3 * arrIndex;

    const blogsOnPage = blogs.slice(arrayStart, arrayEnd);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogsOnPage.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>Written by {blog.author}</h3>
                    <p>{shorten(blog.body, 300)+'.'}</p>
                    <Link to={`/blogs/${blog.id}`}>Read more</Link>
                    <p>&nbsp;</p>
                </div>
            ))}
        </div>
     );
}
 
export default PostsList;