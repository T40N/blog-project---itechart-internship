import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getComments, insertComment } from "../../api/firestoreResources";
import {
  SectionHeader,
  AddComment,
  CommentInput,
  AddCommentButton,
  CommentsContainer,
  Form,
} from "./styled";
import { Content } from "../shared/Header/styled";
import { Icon } from "../shared";
import { useSelector } from "react-redux";
import { pending, reset } from "../../store/slices/handlerSlice";
import Comment from "../Comment";

const CommentsSection = () => {
  const [comments, setComments] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    dispatch(pending());
    getComments(id).then((comments) => {
      console.log(comments.length);
      comments.length && setComments(comments);
      dispatch(reset());
    });
  }, []);

  const onChangeHandler = (e) => {
    setCommentContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(pending());
    insertComment({
      pID: id,
      uID: user.uID,
      content: commentContent,
      name: user.name,
      surname: user.surname,
      profile_picture: user.profilePicture,
    }).then((res) => {
      getComments(id).then((comments) => {
        setComments(comments);
        dispatch(reset());
      });
    });
    e.target.reset();
  };

  return (
    <>
      <SectionHeader>
        <Content>
          <h1>Comments</h1>
        </Content>
      </SectionHeader>

      {user.type > 0 && (
        <AddComment>
          <Form onSubmit={onSubmitHandler}>
            <CommentInput
              placeholder="Add comment"
              onChange={onChangeHandler}
            />
            <AddCommentButton onSubmit={onSubmitHandler}>
              <p>Add comment</p>
              <Icon>add</Icon>
            </AddCommentButton>
          </Form>
        </AddComment>
      )}

      {comments && (
        <CommentsContainer>
          {comments.map((details) => (
            <Comment key={details.id} comment={details}></Comment>
          ))}
        </CommentsContainer>
      )}
    </>
  );
};

export default CommentsSection;
