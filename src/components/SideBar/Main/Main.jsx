import { Icon, ListButton } from "../../shared";
import { Container } from "./styled";

const Main = ({ blogTabOpen }) => {

  return (
    <>
    {
      blogTabOpen &&
      <Container>
      <ListButton>
        <Icon>notes</Icon>
        <h2>All posts</h2>
      </ListButton>

      <ListButton>
        <Icon>short_text</Icon>
        <h2>My posts</h2>
      </ListButton>

      <ListButton>
        <Icon>add</Icon>
        <h2>Add post</h2>
      </ListButton>
    </Container>
    }
    
    {
      !blogTabOpen &&
      <Container>
      <ListButton>
        <Icon>notes</Icon>
        <h2>Change personals</h2>
      </ListButton>

      <ListButton>
        <Icon></Icon>
        <h2>Change password</h2>
      </ListButton>

      <ListButton>
        <Icon></Icon>
        <h2>Delete account</h2>
      </ListButton>
    </Container>
    }
    </>
  );
};

export default Main;
