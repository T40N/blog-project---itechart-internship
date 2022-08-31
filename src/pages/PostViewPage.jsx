import CommentsSection from "../components/CommentsSection";
import PostView from "../components/PostView";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";

const PostViewPage = () => {
  return (
    <PageWrapper>
      <Header>Posts</Header>
      <MainContainerFlex
        style={{ justifyContent: "flex-start" }}
      >
        <>
          <PostView />
          <CommentsSection />
        </>
      </MainContainerFlex>
    </PageWrapper>
  );
}

export default PostViewPage;