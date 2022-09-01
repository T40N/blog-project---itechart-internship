import { useState } from "react";
import {
  TopBox,
  Container,
  TitleBox,
  ContentBox,
  TextButton,
  StyledTextArea,
  StyledInput,
} from "../AddPostPage/styled";
import Input from "../shared/Input.styled";
import { newPost, postsGet } from "../../store/actions/postsActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../shared";

export default function AddPost() {
  const [wordCount, setWordCount] = useState(0);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("please add title");
    } else {
      if (content.length < 2000) {
        alert("please add content");
        return;
      } else {
        dispatch(newPost({ uID: user.uID, title, content })).then((res) => {
          dispatch(postsGet()).then((res) => {
            navigate("/");
          });
        });
        setContent("");
        setTitle("");
      }
    }
  };

  return (
    <Container>
      <TopBox>
        <TitleBox>
          <h3>Title:</h3>
          <StyledInput
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength="23"
          />
        </TitleBox>
        <TextButton onClick={handleSubmit}>
          <h3>add post</h3>
          <Icon>add</Icon>
        </TextButton>
      </TopBox>
      <ContentBox>
        <h3>Content:</h3>
        <StyledTextArea
          required
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setWordCount(e.target.value.split(" ").length);
          }}
          cols="30"
          rows="22"
        ></StyledTextArea>
        <div>
          <p>word Count: {wordCount}</p>
        </div>
      </ContentBox>
    </Container>
  );
}
