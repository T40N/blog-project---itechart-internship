import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getComments, getPost, getUserInfo, insertComment } from "../../api/firestoreResources";
import { Container, Post, SectionHeader, AddComment, CommentInput, AddCommentButton, CommentsContainer, Comment, CommentAvatar, CommentLabel, Form, CommentAuthor } from "./styled";
import { Content } from "../shared/Header/styled";
import { Icon } from "../shared";
import { useSelector } from "react-redux";
import { pending, reset } from "../../store/slices/handlerSlice";
import { formatDate } from "../../helpers";

const CommentsSection = () => {
    const [comments, setComments] = useState(null);
    const [commentContent, setCommentContent] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { id } = useParams();

    useEffect(() => {
        dispatch(pending());
        getComments(id).then(comments => {
            setComments(comments);
            dispatch(reset());
        });
    }, []);

    const onChangeHandler = (e) => {
        setCommentContent(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        insertComment({ pID: id, uID: user.uID, content: commentContent, name: user.name, surname: user.surname, profile_picture: user.profilePicture }).then(res => {
            getComments(id).then(comments => {
                setComments(comments);
            })
        });
        ;
    }

    const renderComments = () => {
        return comments.map(comment =>
        (
            <Comment key={comment.id}>
                <CommentLabel>
                    <CommentAvatar link={comment.profile_picture} />
                    <CommentAuthor>
                        <h2>{comment.name} {comment.surname}</h2>
                        <h3>{formatDate(comment.date.toDate())}</h3>
                    </CommentAuthor>
                </CommentLabel>
                <p>{comment.content}</p>
            </Comment>
        )
        );
    }

    return (
        <>
            <SectionHeader>
                <Content>
                    <h1>Comments</h1>
                </Content>
            </SectionHeader>

            {user.type > 0 &&
                <AddComment>
                    <Form onSubmit={onSubmitHandler}>
                        <CommentInput placeholder="Add comment" onChange={onChangeHandler} />
                        <AddCommentButton onSubmit={onSubmitHandler}>
                            <p>Add post</p><Icon>add</Icon>
                        </AddCommentButton>
                    </Form>
                </AddComment>
            }

            {comments &&
                <CommentsContainer>
                    {renderComments()}
                </CommentsContainer>
            }

        </>

    );
}

export default CommentsSection;