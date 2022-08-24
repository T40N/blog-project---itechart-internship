import { useState } from 'react';
import PostsList from './postsList';
import useFetch from './useFetch';

const Options = (blogs) => {
        let options = [];
        if(blogs){
            const length = Math.ceil(blogs.length/3);
            for (let i = 1; i <= length; i++) {
                options.push(<option value={i}>{i}</option>);
            }
            console.log(options);
        }
        return options;
    }

const PostsView = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    const [index, setIndex] = useState("1");

    const options = Options(blogs);
    console.log(options);
    
    return ( 
        <div className="posts-view">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <PostsList blogs = {blogs} title= "All of the titles" index = {index}/>}
            <select
            value={index}
            onChange = { e => setIndex(e.target.value)}
            >
            {options}
            </select>
        </div>  
     );
}
 
export default PostsView;