import PasswordChange from "../components/PasswordChange";
import { Header, MainContainerFlex, PageWrapper } from "../components/shared";

const PasswordChangePage = () => {
  return (
    <PageWrapper>
      <Header>Password Change</Header>
      <MainContainerFlex>
        <PasswordChange />
      </MainContainerFlex>
    </PageWrapper>
  );
};

export default PasswordChangePage;
