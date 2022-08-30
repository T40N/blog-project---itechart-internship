import ReadPost from "../components/ReadPost/ReadPost";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";
const ReadPostViewPage = () => {
    return (
        <PageWrapper>
          <Header>Post</Header>
          <MainContainerFlex>
            <ReadPost />
          </MainContainerFlex>
        </PageWrapper>
      );
}

export default ReadPostViewPage;