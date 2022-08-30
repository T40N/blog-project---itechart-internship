import {
  Container,
  PersonalsAvatar,
  InfoChangeButton,
  InfoLabel,
  Line,
  Bio,
} from "./styled";
import { useSelector } from "react-redux/es/exports";

const Personals = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <PersonalsAvatar link={user.profilePicture} />
      <InfoChangeButton>Change avatar</InfoChangeButton>
      <Line height="2rem" />
      <InfoLabel>{user.name}</InfoLabel>
      <InfoChangeButton>Change firstname</InfoChangeButton>
      <Line height="4.75rem" />
      <InfoLabel>{user.surname}</InfoLabel>
      <InfoChangeButton>Change lastname</InfoChangeButton>
      <Line height="4.75rem" />
      <InfoLabel>Bio</InfoLabel>
      <InfoChangeButton>Change bio</InfoChangeButton>
      <Bio>
        is an American actor and filmmaker. Known for both his comedic and
        dramatic roles, he is one of the most popular and recognizable film
        stars worldwide, and is regarded as an American cultural icon.[2]
        Hanks's films have grossed more than $4.9 billion in North America and
        more than $9.96 billion worldwide,[3] making him the
        fourth-highest-grossing actor in North America.[4]
      </Bio>
    </Container>
  );
};

export default Personals;
