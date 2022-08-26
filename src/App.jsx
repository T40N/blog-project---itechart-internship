import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "./store/actions/postsActions";
import { register, logIn } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.user);
  const postsState = useSelector((store) => store.posts);

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailloginRef = useRef();
  const passwordloginRef = useRef();

  const titleRef = useRef();
  const contentRef = useRef();

  const onRegisterHandler = () => {
    const user = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(register(user));
  };

  const onLoginHandler = () => {
    const user = {
      email: emailloginRef.current.value,
      password: passwordloginRef.current.value,
    };

    dispatch(logIn(user));
  };

  const addPostHandler = () => {
    const post = {
      uID: userState.id,
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    dispatch(newPost(post));
  };

  return (
    <div className="App">
      <div>
        <input placeholder="name" ref={nameRef}></input>
        <input placeholder="surname" ref={surnameRef}></input>
        <input placeholder="email" ref={emailRef}></input>
        <input placeholder="password" ref={passwordRef}></input>
        <button onClick={onRegisterHandler}>register</button>
      </div>
      <div>
        <input placeholder="email" ref={emailloginRef}></input>
        <input placeholder="password" ref={passwordloginRef}></input>
        <button onClick={onLoginHandler}>login</button>
      </div>
      <div>
        <input placeholder="title" ref={titleRef}></input>
        <input placeholder="content" ref={contentRef} />
        <button onClick={addPostHandler}>Add Post</button>
      </div>
      <p>{userState.id}</p>
      {postsState.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </div>
  );
};

export default App;
