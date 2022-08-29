import { Container, ProfileInfoContainer, SnipetInfoContainer, TabSwitchContainer, Switch } from "./styled";
import { Avatar } from "../../shared";

const Header = ({ blogTabOpen, callback, user }) => {
  const displayUserType = () => {
    switch(user.type) {
      case 0:
        return 'Guest';

      case 1:
        return 'User';

      case 2:
        return 'Redactor';

      case 3:
        return 'Administrator';

      default:
        return 'NOT_DEFINIED';
    }
  }

  return (
    <Container>
      <ProfileInfoContainer>
        <Avatar isInSidebar={ true } link={user.profile_picture}/>
        <SnipetInfoContainer>
          <h1>John Doe</h1>
          <p>{ displayUserType() }</p>
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
