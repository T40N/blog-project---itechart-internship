import PostsView from "../components/PostsViewPage";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";
import SearchBar from "../components/shared/SearchBar";
const PostsViewPage = () => {
  return (
    <PageWrapper>
      <SearchBar />
      <MainContainerFlex>
        <PostsView />
      </MainContainerFlex>
    </PageWrapper>
  );
};

export default PostsViewPage;
