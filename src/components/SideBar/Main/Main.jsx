import { Icon, ListButtonLinkless } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";

const Main = ({ blogTabOpen, user, isSnippet }) => {
  return (
    <>
      {
        blogTabOpen &&
        <Container>
          <ListButton to="/">
            <Icon>notes</Icon>
            { !isSnippet && <h2>All posts</h2>}
          </ListButton>

          {user.type > 0 &&
            <>
              <ListButton to="/myPosts">
                <Icon>short_text</Icon>
                { !isSnippet && <h2>My posts</h2>}
              </ListButton>

              <ListButton to="/addPost">
                <Icon>add</Icon>
                { !isSnippet && <h2>Add post</h2>}
              </ListButton>
            </>
          }
        </Container>
      }

      {
        !blogTabOpen &&
        <Container>
          {user.type === 0 &&
            <>
              <ListButton to="/login">
                <Icon>login</Icon>
                { !isSnippet && <h2>Sign in</h2>}
              </ListButton>

              <ListButton to="/register">
                <Icon>person_add</Icon>
                { !isSnippet && <h2>Sign up</h2>}
              </ListButton>
            </>
          }

          {user.type > 0 &&
            <>
              <ListButton to="/changePersonals">
                <Icon>account_circle</Icon>
                { !isSnippet && <h2>Change personals</h2>}
              </ListButton>

              <ListButton to="/changePassword">
                <Icon>lock</Icon>
                { !isSnippet && <h2>Change password</h2>}
              </ListButton>

              <ListButtonLinkless>
                <Icon>delete</Icon>
                { !isSnippet && <h2>Delete account</h2>}
              </ListButtonLinkless>
            </>
          }

          {user.type === 3 &&
            <>
              <ListButton to="/manageUsers">
                <Icon>supervised_user_circle</Icon>
                { !isSnippet && <h2>Manage users</h2>}
              </ListButton>
            </>
          }

        </Container>
      }
    </>
  );
};

export default Main;