import { SideBarFooter, SideBarMain, Container } from "./styled";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const SideBar = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default SideBar;
