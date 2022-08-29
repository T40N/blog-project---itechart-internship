import { Container, ProfileInfoContainer, SnipetInfoContainer, TabSwitchContainer, Switch, SnippetContainer } from "./styled";
import { Avatar, ListButtonLinkless, Icon } from "../../shared";

const Header = ({ blogTabOpen, setBlogTabOpen, setMenuOpen, menuOpen, user, isSnippet }) => {
  const displayUserType = () => {
    switch (user.type) {
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
      {!isSnippet &&
        <>
          <ProfileInfoContainer>
            <Avatar isInSidebar={true} link={user.profile_picture} />
            <SnipetInfoContainer>
              <h1>John Doe</h1>
              <p>{displayUserType()}</p>
            </SnipetInfoContainer>

          </ProfileInfoContainer>

          <TabSwitchContainer>
            <Switch active={blogTabOpen} onClick={() => setBlogTabOpen(!blogTabOpen)}>
              <h1>Blog</h1>
            </Switch>
            <Switch active={!blogTabOpen} onClick={() => setBlogTabOpen(!blogTabOpen)}>
              <h1>Account</h1>
            </Switch>
          </TabSwitchContainer>

        </>
      }

      {isSnippet &&
        <SnippetContainer>
          <ListButtonLinkless onClick={() => setMenuOpen(!menuOpen) }>
            <Icon>menu</Icon>
          </ListButtonLinkless>

          <ListButtonLinkless onClick={() => setBlogTabOpen(!blogTabOpen)}>
            <Icon>view_carousel</Icon>
          </ListButtonLinkless>
        </SnippetContainer>

      }
    </Container>
  );
};

export default Header;
