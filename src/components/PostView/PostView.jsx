import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getComments, getPost, getUserInfo, insertComment } from "../../api/firestoreResources";
import { Container, Post, SectionHeader, AddComment, CommentInput, AddCommentButton, CommentsSection, Comment, CommentAvatar, CommentLabel, Form, CommentAuthor } from "./styled";
import { Content } from "../shared/Header/styled";
import { Icon } from "../shared";
import { useSelector } from "react-redux";
import { pending, reset } from "../../store/slices/handlerSlice";
import { formatDate } from "../../helpers";

const PostView = () => {
    const [postInfo, setPostInfo] = useState(null);
    const [commentContent, setCommentContent] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { id } = useParams();

    useEffect(() => {
        dispatch(pending());
        getPost(id).then((postInfo) => {
            getUserInfo(postInfo.u_id).then(userInfo => {
                getComments(id).then(commentsInfo => {
                    setPostInfo({ post: postInfo, user: userInfo, comments: commentsInfo });
                    dispatch(reset());
                });
            })
        });
    }, []);

    return (
        <Container>
            {postInfo &&
                <>
                    <Post>
                        <h2>{postInfo.post.title}</h2>
                        <h3>by {postInfo.user.name} {postInfo.user.surname}</h3>
                        <p>{postInfo.post.content}</p>
                    </Post>
                </>
            }
        </Container>
    );
}

export default PostView;