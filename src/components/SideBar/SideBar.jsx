import { Container, MobileSnippet, Hamburger } from "./styled";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

const SideBar = ({ user }) => {
  const [blogTabOpen, setBlogTabOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)}>menu</Hamburger>

      <Container openMenu={openMenu}>
        <Header blogTabOpen={blogTabOpen} setBlogTabOpen={setBlogTabOpen} user={user} isSnippet={false}/>
        <Main blogTabOpen={blogTabOpen} user={user} isSnippet={false}/>
        <Footer user={user} isSnippet={false}/>
      </Container>

      <MobileSnippet openMenu={openMenu}>
        <Header blogTabOpen={blogTabOpen} setBlogTabOpen={setBlogTabOpen} user={user} isSnippet={true}/>
        <Main blogTabOpen={blogTabOpen} user={user} isSnippet={true}/>
        <Footer user={user} isSnippet={true}/>
      </MobileSnippet>
    </>
  );
};

export default SideBar;
