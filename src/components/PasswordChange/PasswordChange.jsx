import { updatePassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../api/firebase";
import { Button, Input } from "../shared";
import {
  ButtonContainer,
  ErrorMsg,
  Form,
  InputContainer,
  Label,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { logIn } from "../../store/actions/userActions";
import { pending, reset } from "../../store/slices/handlerSlice";

const PasswordChange = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordState, setPasswordState] = useState({
    password: "",
    repeatPassword: "",
    oldPassword: "",
  });

  const [err, setErr] = useState({
    password: false,
    repeatPassword: false,
    oldPassword: false,
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;

    setPasswordState({
      ...passwordState,
      [e.target.name]: value,
    });

    setErr({
      ...err,
      [e.target.name]: false,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (passwordState.password.length < 6) {
      setErr({
        ...err,
        password: true,
      });

      return;
    }

    if (passwordState.repeatPassword !== passwordState.password) {
      setErr({
        ...err,
        repeatPassword: true,
      });

      return;
    }

    dispatch(pending());
    dispatch(logIn({ email: user.email, password: passwordState.oldPassword }))
      .unwrap()
      .then(() => {
        updatePassword(auth.currentUser, passwordState.password).then(() => {
          navigate("/");
          dispatch(reset());
        });
      })
      .catch(() => {
        dispatch(reset());
        setErr({
          ...err,
          oldPassword: true,
        });
      });

    setPasswordState({
      password: "",
      repeatPassword: "",
      oldPassword: "",
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputContainer>
        <Label htmlFor="oldPassword">Old password</Label>
        <Input
          placeholder="password"
          type="password"
          name="oldPassword"
          id="oldPassword"
          value={passwordState.oldPassword}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.oldPassword}>
          Not a correct password. Try again.
        </ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="newPassword">New password</Label>
        <Input
          placeholder="password"
          type="password"
          name="password"
          id="newPassword"
          value={passwordState.password}
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.password}>
          Password should have at least 6 characters.
        </ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="repeatPassword">Repeat password</Label>
        <Input
          placeholder="password"
          type="password"
          name="repeatPassword"
          value={passwordState.repeatPassword}
          id="repeatPassword"
          onChange={onChangeHandler}
        />
        <ErrorMsg error={err.repeatPassword}>
          Passwords are not the same.
        </ErrorMsg>
      </InputContainer>
      <ButtonContainer onClick={onSubmitHandler}>
        <Button>Change Password</Button>
      </ButtonContainer>
    </Form>
  );
};

export default PasswordChange;
