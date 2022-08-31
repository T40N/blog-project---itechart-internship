import {
  Form,
  InputContainer,
  Label,
  ButtonContainer,
  ErrorMsg,
  RegisterLink,
} from "./styled";
import { Input, Button } from "../shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isEmailValid } from "../../helpers";
import { logIn } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    login: false,
    email: false,
    password: false,
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setLoginState({
      ...loginState,
      [e.target.name]: value,
    });
    setErr({
      ...err,
      [e.target.name]: false,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = loginState.email.trim();
    const password = loginState.password.trim();

    if (!isEmailValid(email)) {
      setErr({
        ...err,
        email: true,
      });
      return;
    }

    if (password.length < 6) {
      setErr({
        ...err,
        password: true,
      });
      return;
    }

    const user = {
      email,
      password,
    };

    dispatch(logIn(user))
      .then((res) => navigate("/"))
      .catch((errLogin) =>
        setErr({
          ...err,
          login: true,
        })
      );

    setLoginState({
      email: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <ErrorMsg error={err.login}>
        Can't find account check your credentials
      </ErrorMsg>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="|"
          type="email"
          name="email"
          value={loginState.email}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.email}>Email is not valid.</ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="|"
          type="password"
          name="password"
          value={loginState.password}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.password}>
          Password should have at least 6 characters.
        </ErrorMsg>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onSubmitHandler}>Login</Button>
      </ButtonContainer>
      <RegisterLink to="/register">
        Don't have account yet? Register!
      </RegisterLink>
    </Form>
  );
};

export default Login;
