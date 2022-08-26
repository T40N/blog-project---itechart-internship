import { Container, ProfileInfoContainer, SnipetInfoContainer } from "./styled";
import { Avatar } from "../../shared";
const Header = () => {
  return (
    <Container>
      <ProfileInfoContainer>
        <Avatar isInSidebar={true} />
        <SnipetInfoContainer>
          <h1>John Doe</h1>
          <p>Administrator</p>
        </SnipetInfoContainer>
      </ProfileInfoContainer>
    </Container>
  );
};

export default Header;
