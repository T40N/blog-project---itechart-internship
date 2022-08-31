import { Container, MobileSnippet, Hamburger } from "./styled";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const SideBar = ({ user }) => {
  const [blogTabOpen, setBlogTabOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)}>{openMenu ? 'close' : 'menu'}</Hamburger>

      <Container openMenu={openMenu}>
        <Header blogTabOpen={blogTabOpen} setBlogTabOpen={setBlogTabOpen} user={user} isSnippet={false} setOpenMenu={setOpenMenu}/>
        <Main blogTabOpen={blogTabOpen} user={user} isSnippet={false} setOpenMenu={setOpenMenu}/>
        <Footer user={user} isSnippet={false} setOpenMenu={setOpenMenu}/>
      </Container>

      <MobileSnippet openMenu={openMenu}>
        <Header blogTabOpen={blogTabOpen} setBlogTabOpen={setBlogTabOpen} user={user} isSnippet={true} setOpenMenu={setOpenMenu}/>
        <Main blogTabOpen={blogTabOpen} user={user} isSnippet={true} setOpenMenu={setOpenMenu}/>
        <Footer user={user} isSnippet={true} setOpenMenu={setOpenMenu}/>
      </MobileSnippet>
    </>
  );
};

export default SideBar;
