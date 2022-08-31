import { Icon, ListButtonLinkless } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";

const Main = ({ blogTabOpen, user, isSnippet, setOpenMenu }) => {

  return (
    <>
      {blogTabOpen && (
        <Container>
          <ListButton to="/" onClick={ () => setOpenMenu(false) }>
            <Icon>notes</Icon>
            {!isSnippet && <h2>All posts</h2>}
          </ListButton>

          {user.type > 0 && (
            <>
              <ListButton to="/myPosts" onClick={ () => setOpenMenu(false) }>
                <Icon>short_text</Icon>
                {!isSnippet && <h2>My posts</h2>}
              </ListButton>

              <ListButton to="/addPost" onClick={ () => setOpenMenu(false) }>
                <Icon>add</Icon>
                {!isSnippet && <h2>Add post</h2>}
              </ListButton>
            </>
          )}
        </Container>
      )}

      {!blogTabOpen && (
        <Container>
          {user.type === 0 && (
            <>
              <ListButton to="/login" onClick={ () => setOpenMenu(false) }>
                <Icon>login</Icon>
                {!isSnippet && <h2>Sign in</h2>}
              </ListButton>

              <ListButton to="/register" onClick={ () => setOpenMenu(false) }>
                <Icon>person_add</Icon>
                {!isSnippet && <h2>Sign up</h2>}
              </ListButton>
            </>
          )}

          {user.type > 0 && (
            <>
              <ListButton to="/personals" onClick={ () => setOpenMenu(false) }>
                <Icon>badge</Icon>

                {!isSnippet && <h2>Change personals</h2>}
              </ListButton>

              <ListButton to="/passwordChange" onClick={ () => setOpenMenu(false) }>
                <Icon>lock</Icon>
                {!isSnippet && <h2>Change password</h2>}
              </ListButton>

              <ListButtonLinkless onClick={ () => setOpenMenu(false) }>
                <Icon>delete</Icon>
                {!isSnippet && <h2>Delete account</h2>}
              </ListButtonLinkless>
            </>
          )}

          {user.type === 3 && (
            <>
              <ListButton to="/manageUsers" onClick={ () => setOpenMenu(false) }>
                <Icon>supervised_user_circle</Icon>
                {!isSnippet && <h2>Manage users</h2>}
              </ListButton>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default Main;
