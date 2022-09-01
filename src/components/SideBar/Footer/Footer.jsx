import { Icon, ListButtonLinkless } from "../../shared";
import { Container, LinkIssues } from "./styled";
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
      <LinkIssues
        href="https://pl.reactjs.org/"
        onClick={() => setOpenMenu(false)}
      >
        <Icon>help</Icon>
        {!isSnippet && <h2>Issues</h2>}
      </LinkIssues>

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
