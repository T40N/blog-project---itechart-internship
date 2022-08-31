import { Container, CommentAvatar, CommentLabel, CommentAuthor } from "./styled";
import { formatDate } from "../../helpers";
import { useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <CommentLabel>
                <CommentAvatar link={comment.profile_picture} onClick={ () => navigate(`/${comment.u_id}`)} />
                <CommentAuthor>
                    <h2>{comment.name} {comment.surname}</h2>
                    <h3>{formatDate(comment.date.toDate())}</h3>
                </CommentAuthor>
            </CommentLabel>
            <p>{comment.content}</p>
        </Container>
    );
}

export default Comment;