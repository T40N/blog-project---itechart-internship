import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getPost, getUserInfo, insertComment } from "../../api/firestoreResources";
import { Container, Post, SectionHeader, AddComment, CommentInput, AddCommentButton, CommentsSection, Comment, CommentAvatar, CommentLabel, Form, CommentAuthor } from "./styled";
import { Content } from "../shared/Header/styled";
import { Icon } from "../shared";
import { useSelector } from "react-redux";

const PostView = () => {
    const [postInfo, setPostInfo] = useState(null);
    const [commentContent, setCommentContent] = useState("");
    const { id } = useParams();
    const { uID } = useSelector(state => state.user);

    useEffect(() => {
        getPost(id).then((postInfo) => {
            getUserInfo(postInfo.u_id).then(userInfo => {
                getComments(id).then(commentsInfo => {
                    setPostInfo({ post: postInfo, user: userInfo, comments: commentsInfo });
                });
            })
        });
    }, []);

    const onChangeHandler = (e) => {
        setCommentContent(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        insertComment({ pID: id, uID, content: commentContent, name: postInfo.user.name, surname: postInfo.user.surname, profile_picture: postInfo.user.profile_picture }).then(res => {
            getComments(id).then(commentsInfo => {
                setPostInfo({ ...postInfo, comments: commentsInfo });
            })
        });
        ;
    }

    const renderComments = () => {
        console.log(postInfo.comments);
        return postInfo.comments.map(comment =>
        (
            <Comment key={comment.id}>
                <CommentLabel>
                    <CommentAvatar link={comment.profile_picture} />
                    <CommentAuthor>
                        <h2>{comment.name} {comment.surname}</h2>
                        <h3>12.02.2022</h3>
                    </CommentAuthor>
                </CommentLabel>
                <p>{comment.content}</p>
            </Comment>
        )
        );
    }


    return (
        <Container>
            {postInfo &&
                <>
                    <Post>
                        <h2>{postInfo.post.title}</h2>
                        <h3>by {postInfo.user.name} {postInfo.user.surname}</h3>
                        <p>{postInfo.post.content}</p>
                    </Post>

                    <SectionHeader>
                        <Content>
                            <h1>Comments</h1>
                        </Content>
                    </SectionHeader>

                    <Form onSubmit={onSubmitHandler}>
                        <AddComment>
                            <CommentInput placeholder="Add comment" onChange={onChangeHandler} />
                            <AddCommentButton onSubmit={onSubmitHandler}>
                                Add post<Icon>add</Icon>
                            </AddCommentButton>
                        </AddComment>
                    </Form>

                    <CommentsSection>
                        {postInfo.comments && renderComments()}
                    </CommentsSection>
                </>
            }
        </Container>
    );
}

export default PostView;