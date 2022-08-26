import { Container } from "./styled";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

const SideBar = () => {
  const [blogTabOpen, setBlogTabOpen] = useState(true);

  return (
    <Container>
      <Header blogTabOpen = {blogTabOpen} callback={ setBlogTabOpen }/>
      <Main blogTabOpen = {blogTabOpen}/>
      <Footer />
    </Container>
  );
};

export default SideBar;
