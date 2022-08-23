import { Link } from "react-router-dom";

const PostsList = ( {blogs, title, index}) => {

    const arrIndex = Number(index);
    console.log(blogs);
    console.log(arrIndex);
    const arrayStart = 3 * arrIndex - 3;
    const arrayEnd = 3 * arrIndex;

    const blogsOnPage = blogs.slice(arrayStart, arrayEnd)

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogsOnPage.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h3>Written by {blog.author}</h3>
                        <p>{blog.body.substring(0,300)}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default PostsList;