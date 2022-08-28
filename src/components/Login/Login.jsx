import {
  Form,
  InputContainer,
  Label,
  ButtonContainer,
  ErrorMsg,
} from "./styled";
import { Input, Button } from "../shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isEmailValid } from "../../helpers";
import { logIn } from "../../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setLoginState({
      ...loginState,
      [e.target.name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = loginState.email.trim();
    const password = loginState.password.trim();

    if (!isEmailValid(email)) {
      setErr("Email is not valid.");
      return;
    }

    if (password.length < 6) {
      setErr(
        "Password should have at least 6 characters, one number and one special character."
      );
      return;
    }

    const user = {
      email,
      password,
    };

    dispatch(logIn(user));

    setLoginState({
      email: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      {err && <ErrorMsg>{err}</ErrorMsg>}
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="|"
          type="email"
          name="email"
          value={loginState.email}
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="|"
          type="password"
          name="password"
          value={loginState.email}
          onChange={onChangeHandler}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onSubmitHandler}>Login</Button>
      </ButtonContainer>
    </Form>
  );
};

export default Login;
