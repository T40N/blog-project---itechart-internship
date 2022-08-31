import { Icon, ListButtonLinkless } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const Footer = ({ user, isSnippet, setOpenMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    dispatch(logOut()).then((res) => {
      navigate("/");
      setOpenMenu(false);
    });
  };

  return (
    <Container>
      <ListButton to="/issues" onClick={ () => setOpenMenu(false) }>
        <Icon>help</Icon>
        {!isSnippet && <h2>Issues</h2>}
      </ListButton>

      {user.type > 0 && (
        <ListButtonLinkless onClick={onLogoutHandler}>
          <Icon>logout</Icon>
          {!isSnippet && <h2>Logout</h2>}
        </ListButtonLinkless>
      )}
    </Container>
  );
};

export default Footer;
