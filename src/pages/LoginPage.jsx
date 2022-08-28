import { PageWrapper, MainContainerFlex, Header } from "../components/shared";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <PageWrapper>
      <Header>Login</Header>
      <MainContainerFlex>
        <Login />
      </MainContainerFlex>
    </PageWrapper>
  );
};

export default LoginPage;
