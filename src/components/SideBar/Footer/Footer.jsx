import { Icon } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";

const Footer = () => {
  return (
    <Container>
      <ListButton to="/issues">
        <Icon>help</Icon>
        <h2>Issues</h2>
      </ListButton>

      <ListButton to="/logout">
        <Icon>logout</Icon>
        <h2>Logout</h2>
      </ListButton>
    </Container>
  )
};

export default Footer;
