import { Form, InputContainer, Label, ButtonContainer } from "./styled";
import { Button, Input } from "../shared";
import { useState } from "react";

const Register = () => {
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
    
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="|"
          type="text"
          name="name"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="surname">Surname</Label>
        <Input
          placeholder="|"
          type="text"
          name="surname"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="|"
          type="email"
          name="email"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Password</Label>
        <Input
          placeholder="|"
          type="password"
          name="password"
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
