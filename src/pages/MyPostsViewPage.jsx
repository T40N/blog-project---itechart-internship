import MyPostsPage from "../components/MyPostsPage";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";
const MyPostsViewPage = () => {
    return (
        <PageWrapper>
          <Header>My Posts</Header>
          <MainContainerFlex>
            <MyPostsPage />
          </MainContainerFlex>
        </PageWrapper>
      );
}

export default MyPostsViewPage;