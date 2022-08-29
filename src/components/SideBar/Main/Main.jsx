import { Icon } from "../../shared";
import { Container, ListButton } from "./styled";

const Main = ({ blogTabOpen }) => {
  console.log(window.location.pathname);
  return (
    <>
    {
      blogTabOpen &&
      <Container>
      <ListButton to="/login">
        <Icon>notes</Icon>
        <h2>All posts</h2>
      </ListButton>

      <ListButton to="/register">
        <Icon>short_text</Icon>
        <h2>My posts</h2>
      </ListButton>

      <ListButton to="/xd">
        <Icon>add</Icon>
        <h2>Add post</h2>
      </ListButton>
    </Container>
    }
    
    {
      !blogTabOpen &&
      <Container>
      {/* <ListButton to="/changePersonals">
        <Icon>notes</Icon>
        <h2>Change personals</h2>
      </ListButton>

      <ListButton to="/changePassword">
        <Icon></Icon>
        <h2>Change password</h2>
      </ListButton>

      <ListButton to="/deleteAccount">
        <Icon></Icon>
        <h2>Delete account</h2>
      </ListButton> */}
    </Container>
    }
    </>
  );
};

export default Main;
