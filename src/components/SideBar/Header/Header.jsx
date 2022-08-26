import { Container, ProfileInfoContainer, SnipetInfoContainer, TabSwitchContainer, Switch } from "./styled";
import { Avatar } from "../../shared";

const Header = ({ blogTabOpen, callback }) => {
  return (
    <Container>
      <ProfileInfoContainer>
        <Avatar isInSidebar={ true } />
        <SnipetInfoContainer>
          <h1>John Doe</h1>
          <p>Administrator</p>
        </SnipetInfoContainer>
      </ProfileInfoContainer>

      <TabSwitchContainer>
        <Switch active={ blogTabOpen } onClick={ () => callback(!blogTabOpen) }>
          <h1>Blog</h1>
        </Switch>
        <Switch active={ !blogTabOpen } onClick={ () => callback(!blogTabOpen) }>
          <h1>Account</h1>
        </Switch>
      </TabSwitchContainer>
    </Container>
  );
};

export default Header;
