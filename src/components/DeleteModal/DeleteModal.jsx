import { Button } from "../shared";
import { ButtonContainer, Container, Content } from "./styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ onClose }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    dispatch(deleteUser(user.uID)).then(() => {
      onClose();
      navigate("/");
    });
  };

  const onCancelHandler = () => {
    onClose();
  };

  return (
    <Container>
      <Content>
        <h1>Are you sure you whant to delete your account?</h1>
        <ButtonContainer>
          <Button width="30%" onClick={onDeleteHandler}>
            Delete
          </Button>
          <Button width="30%" onClick={onCancelHandler}>
            Cancel
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default DeleteModal;