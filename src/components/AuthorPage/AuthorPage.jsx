import { useParams } from "react-router-dom";
import { auth } from "../../api/firebase";
import { getUser } from "../../store/actions/userActions";


export default function AuthorPage(){

    const { id } = useParams();

    const author = getUser(id);
    const posts = author.posts;
    

    return(
        <>
        <AuthorContainer>
            <Avatar />
            <BaseInfo>
                <h3>{author.name} {author.surname}</h3>
                <p>Joined at {author.date_of_register}</p>
                <div></div>
                <h3>{author.type}</h3>
                <p>Posts: {author.posts.length}</p>
            </BaseInfo>
            <Bio>
                <p>{author.bio}</p>
            </Bio>
        </AuthorContainer>
        <PostsContainer>
            {postsTitles}
        </PostsContainer>
        </>
    )
}