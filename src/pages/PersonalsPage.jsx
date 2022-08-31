import Personals from "../components/Personals";
import { Header, MainContainerFlex, PageWrapper } from "../components/shared";

const PersonalsPage = () => {
  return (
    <PageWrapper>
      <Header>Personals</Header>
      <MainContainerFlex>
        <Personals />
      </MainContainerFlex>
    </PageWrapper>
  );
};

export default PersonalsPage;
