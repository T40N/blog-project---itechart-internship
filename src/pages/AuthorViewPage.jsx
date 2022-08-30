import AuthorPage from "../components/AuthorPage/AuthorPage";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";
const AuthorViewPage = () => {
    return (
        <PageWrapper>
          <Header>Author</Header>
          <MainContainerFlex>
            <AuthorPage />
          </MainContainerFlex>
        </PageWrapper>
      );
}

export default AuthorViewPage;