import { Icon, ListButtonLinkless } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/actions/userActions";

const Footer = ({ user, isSnippet }) => {
  const dispatch = useDispatch()

  const onLogoutHandler = () => {
    dispatch(logOut());
  }

  return (
    <Container>
      <ListButton to="/issues">
        <Icon>help</Icon>
        { !isSnippet && <h2>Issues</h2> }
      </ListButton>

      {user.type > 0 &&
        <ListButtonLinkless onClick={onLogoutHandler}>
          <Icon>logout</Icon>
          { !isSnippet && <h2>Logout</h2> }
        </ListButtonLinkless>
      }
    </Container>
  )
};

export default Footer;
