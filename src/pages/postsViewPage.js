import { useState } from 'react';
import PostsList from './postsList';
import useFetch from './useFetch';

const PostsView = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    const [index, setIndex] = useState("1")
    
    return ( 
        <div className="posts-view">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <PostsList blogs = {blogs} title= "All of the titles" index = {index}/>}
            <select
            value={index}
            onChange = { e => setIndex(e.target.value)}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>  
     );
}
 
export default PostsView;