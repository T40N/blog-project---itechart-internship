import {
  Form,
  InputContainer,
  Label,
  ButtonContainer,
  ErrorMsg,
  LoginLink,
} from "./styled";
import { Button, Input } from "../shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/userActions";
import { isEmailValid } from "../../helpers";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerState, setRegisterState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setRegisterState({
      ...registerState,
      [e.target.name]: value,
    });
    setErr({
      ...err,
      [e.target.name]: false,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const name = registerState.name.trim();
    const surname = registerState.surname.trim();
    const email = registerState.email.trim();
    const password = registerState.password.trim();

    if (name === "") {
      setErr({
        ...err,
        name: true,
      });
      return;
    }

    if (surname === "") {
      setErr({
        ...err,
        surname: true,
      });
      return;
    }

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
      name,
      surname,
      email,
      password,
    };

    dispatch(register(user)).then(navigate("/"));

    setRegisterState({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="|"
          type="text"
          name="name"
          value={registerState.name}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.name}>Name is required.</ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="surname">Surname</Label>
        <Input
          placeholder="|"
          type="text"
          name="surname"
          value={registerState.surname}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.surname}>Surname is required.</ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="|"
          type="email"
          name="email"
          value={registerState.email}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.email}>Email is not valid.</ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Password</Label>
        <Input
          placeholder="|"
          type="password"
          name="password"
          value={registerState.password}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.password}>
          Password should have at least 6 characters.
        </ErrorMsg>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onSubmitHandler}>Sign up</Button>
      </ButtonContainer>
      <LoginLink to="/login">Allready have a account? Login!</LoginLink>
    </Form>
  );
};

export default Register;
