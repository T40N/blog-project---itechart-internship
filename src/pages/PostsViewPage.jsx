import PostsView from "../components/PostsViewPage";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";
const PostsViewPage = () => {
    return (
        <PageWrapper>
          <Header>Posts</Header>
          <MainContainerFlex>
            <PostsView />
          </MainContainerFlex>
        </PageWrapper>
      );
}

export default PostsViewPage;