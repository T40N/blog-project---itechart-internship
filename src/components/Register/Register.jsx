import {
  Form,
  InputContainer,
  Label,
  ButtonContainer,
  ErrorMsg,
} from "./styled";
import { Button, Input } from "../shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/userActions";
import { isEmailValid } from "../../helpers";

const Register = () => {
  const dispatch = useDispatch();

  const [err, setErr] = useState("");
  const [registerState, setRegisterState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setRegisterState({
      ...registerState,
      [e.target.name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const name = registerState.name.trim();
    const surname = registerState.surname.trim();
    const email = registerState.email.trim();
    const password = registerState.password.trim();

    if (name === "") {
      setErr("Name is required.");
      return;
    }

    if (surname === "") {
      setErr("Surname is required.");
      return;
    }

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
      name,
      surname,
      email,
      password,
    };

    dispatch(register(user));

    setRegisterState({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      {err && <ErrorMsg>{err}</ErrorMsg>}
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="|"
          type="text"
          name="name"
          value={registerState.name}
          onChange={onChangeHandler}
        />
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
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onSubmitHandler}>Login</Button>
      </ButtonContainer>
    </Form>
  );
};

export default Register;
