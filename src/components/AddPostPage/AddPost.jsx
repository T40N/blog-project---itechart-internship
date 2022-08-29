import { useState } from "react";
import { TopBox,Container, TitleBox, ContentBox, TextButton,} from "../AddPostPage/styled";
import Input from "../shared/Input.styled";
import { newPost } from "../../store/actions/postsActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AddPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const uID = "CZyq03sg74YXQIURstSpnFvn0aH2";
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" && content === "") {
      alert("please add text");
    } else {
      dispatch(newPost({ uID, title, content }));
      setContent("");
      setTitle("");
        history(-1);
    }
  };

  return (
    <Container>
      <TopBox>
        <TitleBox>
          <h3>Title:</h3>
          <Input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleBox>
        <TextButton onClick={handleSubmit}>
          <h3>add post</h3>
        </TextButton>
      </TopBox>
      <ContentBox>
        <h3>Content:</h3>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <span>elo</span>
        </div>
      </ContentBox>
    </Container>
  );
}
