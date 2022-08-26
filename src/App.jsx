import { useRef } from "react";

const App = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailloginRef = useRef();
  const passwordloginRef = useRef();

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
        <button onClick={addPostHanlder}>Add Post</button>
      </div>
    </div>
  );
};

export default App;
