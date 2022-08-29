import { Container } from "./styled";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

const SideBar = ({ user }) => {
  const [blogTabOpen, setBlogTabOpen] = useState(true);
  
  return (
    <Container>
      <Header blogTabOpen = {blogTabOpen} callback={ setBlogTabOpen } user={user}/>
      <Main blogTabOpen = {blogTabOpen} user={user}/>
      <Footer user={user}/>
    </Container>
  );
};

export default SideBar;
