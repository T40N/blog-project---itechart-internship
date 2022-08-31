import Post from "../PostSnippet/PostSnippet";
import { useEffect, useState } from "react";
import { PostsContainer, MainPage, Selection } from "./styled";
import { Theme } from "../../context";
import { postsGet } from "../../store/actions/postsActions";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const Options = (blogs) => {
  let options = [];
  if (blogs) {
    const length = Math.ceil(blogs.length / 3);
    for (let i = 1; i <= length; i++) {
      options.push(<option value={i}>{i}</option>);
    }
  }
  return options;
};

export default function PostsView() {
  const blogs = useSelector((state) => state.posts);
  console.log(blogs)
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);

  const lastIndex = Math.ceil(blogs.length/3);

  let blogsOnPage;
  let options;

  if (blogs) {
    const arrayStart = 3 * index - 3;
    const arrayEnd = 3 * index;
    blogsOnPage = blogs.slice(arrayStart, arrayEnd);
    options = Options(blogs);
  }

  const snippets = blogsOnPage.map((blog) => (
    <Post blog={blog} key={blog.id} />
  ));


  return (
    <Theme>
      <MainPage>
        <PostsContainer>
          {blogs && snippets}
        </PostsContainer>
        <Selection>
          { index !== 1 && <div id={index-1} onClick={(e) => setIndex(+e.target.id)}>previous</div>}
          <div id='1' onClick={(e) => setIndex(+e.target.id)}>1</div>
          <div>·</div>
          { (index !== 1 && index !== lastIndex) && <div id={index} onClick={(e) => setIndex(+e.target.id)}>{index}</div>}
          { (index !== 1 && index !== lastIndex) && <div>·</div>}
          <div id={lastIndex} onClick={(e) => setIndex(+e.target.id)} >{lastIndex}</div>
          { index !== lastIndex && <div id={index+1} onClick={(e) => setIndex(+e.target.id)}>next</div>}
        </Selection>
       </MainPage>
    </Theme>
  );
}

//add icon later
