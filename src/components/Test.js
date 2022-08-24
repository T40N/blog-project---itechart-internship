import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, register } from "../store/actions/userActions";

const Test = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const emailloginRef = useRef();
  const passwordloginRef = useRef();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onRegisterHandler = () => {
    const newUser = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(register(newUser));
  };

  const onLoginHandler = () => {
    const loginObj = {
      email: emailloginRef.current.value,
      register: emailloginRef.current.value,
    };

    dispatch(logIn(loginObj));
  };

  console.log(user);
  return (
    <div>
      <input ref={nameRef} />
      <input ref={surnameRef} />
      <input ref={emailRef} />
      <input ref={passwordRef} />
      <button onClick={onRegisterHandler}>register</button>
      <h1>{user.dateOfRegister}</h1>
      <input ref={emailloginRef} />
      <input ref={passwordloginRef} />
      <button onClick={onLoginHandler}>Login</button>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Test;
