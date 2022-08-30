import PostView from "../components/PostView";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";

const PostViewPage = () => {
    return (
        <PageWrapper>
          <Header>Posts</Header>
          <MainContainerFlex>
            <PostView />
          </MainContainerFlex>
        </PageWrapper>
      );
}

export default PostViewPage;