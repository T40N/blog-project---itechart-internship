import AddPost from "../components/AddPostPage/AddPost";
import { PageWrapper, Header, MainContainerFlex } from "../components/shared";
const AddPostPage = () => {
    return (
        <PageWrapper>
          <Header>Add Post</Header>
          <MainContainerFlex>
            <AddPost />
          </MainContainerFlex>
        </PageWrapper>
      );
}

export default AddPostPage;