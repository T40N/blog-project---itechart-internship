import { Button, Input } from "../shared";
import { ButtonContainer, Container, Content } from "./styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteUser, logIn } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ErrorMsg } from "../Login/styled";
import { pending, reset } from "../../store/slices/handlerSlice";

const DeleteModal = ({ onClose }) => {
  const [deleteState, setDeleteState] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [err, setErr] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    setDeleteState(true);
  };

  const onCancelHandler = () => {
    setDeleteState(false);
    onClose();
  };

  const onChangeHandler = e => {
    setPasswordValue(e.target.value);
  }

  const onConfirmHanlder = e => {
    e.preventDefault();

    if (passwordValue.trim() === "") {
      setErr(true);
      return;
    }

    dispatch(pending());
    dispatch(logIn({ email: user.email, password: passwordValue }))
      .unwrap()
      .then(() => {
        dispatch(deleteUser(user.uID)).then(() => {
          setDeleteState(false);
          onClose();
          navigate("/");
        });
      })
      .catch(() => {
        dispatch(reset());
        setErr(true);
      });
  }

  return (
    <Container>
      <Content>
        {!deleteState ? <>
          <h1>Are you sure you whant to delete your account?</h1>
          <ButtonContainer>
            <Button onClick={onDeleteHandler}>Delete</Button>
            <Button onClick={onCancelHandler}>Cancel</Button>
          </ButtonContainer> </>
          : <>
          <ErrorMsg error={err}>Password is not correct try again.</ErrorMsg>
            <h1>To confirm provide a password.</h1>
            <Input type="password" placeholder="password" value={passwordValue} width="50%" onChange={onChangeHandler} />
            <ButtonContainer>
              <Button onClick={onConfirmHanlder}>Confirm</Button>
              <Button onClick={onCancelHandler}>Cancel</Button>
            </ButtonContainer>
          </>}
      </Content>
    </Container>
  );
};

export default DeleteModal;
