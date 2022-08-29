import Register from "../components/Register";
import { Header, MainContainerFlex, PageWrapper } from "../components/shared";

const RegisterPage = () => {
  return (
    <PageWrapper>
      <Header>Register</Header>
      <MainContainerFlex>
        <Register />
      </MainContainerFlex>
    </PageWrapper>
  );
};

export default RegisterPage;
