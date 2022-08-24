import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
const {id} = useParams();
const {data: blog, isPending ,error} = useFetch('http://localhost:8000/blogs/'+ id)
const history = useHistory();

const handleClick =  () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/')
    })
}

const handleGoBack = () =>{
    history.push('/');
}

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            {error && <div>error</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by <Link to ={`/${blog.author}`}>{blog.author}</Link></p>
                    <div>{blog.body}</div>
                    <button onClick={handleGoBack}>Go back</button>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;