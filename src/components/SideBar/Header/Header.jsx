import { Container, ProfileInfoContainer, SnipetInfoContainer, TabSwitchContainer, Switch, SnippetContainer } from "./styled";
import { Avatar, ListButtonLinkless, Icon } from "../../shared";
import { userType } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Header = ({ blogTabOpen, setBlogTabOpen, setOpenMenu, isSnippet }) => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const viewProfile = () => {
    setOpenMenu(false);
    navigate((user.uID) ? `/${user.uID}` : `login`);
  }

  return (
    <Container>
      {!isSnippet &&
        <>
          <ProfileInfoContainer>

            <Avatar isInSidebar={true} link={user.profilePicture} onClick={ viewProfile }/>
            <SnipetInfoContainer>
              {user.name ? <h1>{user.name}</h1> : <h1>Anonymous</h1>}
              <p>{userType(user.type)}</p>
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
          <ListButtonLinkless onClick={ viewProfile }>
            <Icon>account_circle</Icon>
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
