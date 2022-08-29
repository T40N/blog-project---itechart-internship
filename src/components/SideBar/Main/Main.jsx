import { Icon } from "../../shared";
import { Container } from "./styled";
import { ListButton } from "../styled";

const Main = ({ blogTabOpen }) => {
  return (
    <>
    {
      blogTabOpen &&
      <Container>
      <ListButton to="/">
        <Icon>notes</Icon>
        <h2>All posts</h2>
      </ListButton>

      <ListButton to="/myPosts">
        <Icon>short_text</Icon>
        <h2>My posts</h2>
      </ListButton>

      <ListButton to="/addPost">
        <Icon>add</Icon>
        <h2>Add post</h2>
      </ListButton>
    </Container>
    }
    
    {
      !blogTabOpen &&
      <Container>
      <ListButton to="/changePersonals">
        <Icon>account_circle</Icon>
        <h2>Change personals</h2>
      </ListButton>

      <ListButton to="/changePassword">
        <Icon>lock</Icon>
        <h2>Change password</h2>
      </ListButton>

      <ListButton to="/deleteAccount">
        <Icon>delete</Icon>
        <h2>Delete account</h2>
      </ListButton>
    </Container>
    }
    </>
  );
};

export default Main;
