import { Container, Content } from "./styled";

const Header = ({ children }) => {
  return (
    <Container>
      <Content>
        <h1>{children}</h1>
      </Content>
    </Container>
  );
};

export default Header;
