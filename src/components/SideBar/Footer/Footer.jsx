import { Icon, ListButtonLinkless } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";

const Footer = ({ user }) => {
  return (
    <Container>
      <ListButton to="/issues">
        <Icon>help</Icon>
        <h2>Issues</h2>
      </ListButton>

      {user.type > 0 &&
        <ListButtonLinkless>
          <Icon>logout</Icon>
          <h2>Logout</h2>
        </ListButtonLinkless>
      }

      {/* {user.type === 0 &&
        <ListButton to="/login">
          <Icon>login</Icon>
          <h2>Sign in</h2>
        </ListButton>
      } */}
    </Container>
  )
};

export default Footer;
