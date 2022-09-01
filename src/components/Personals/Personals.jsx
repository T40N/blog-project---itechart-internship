import {
  Container,
  PersonalsAvatar,
  InfoChange,
  InfoLabel,
  Line,
  Bio,
  AvatarInputLabel,
  SubmitButton,
} from "./styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Icon } from "../shared";
import { useState } from "react";
import { getUser, userEdit } from "../../store/actions/userActions";
import { uploadAvatar } from "../../api/firebaseStorage";
import { pending } from "../../store/slices/handlerSlice";

const Personals = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    avatar: "",
    name: "",
    surname: "",
    bio: user.bio,
  });
  const [avatarLabel, setAvatarLabel] = useState("Change avatar");

  const onChangeAvatarHandler = (e) => {
    console.log(e.target.files[0]);
    setUserData({
      ...userData,
      avatar: e.target.files[0],
    });

    setAvatarLabel(e.target.files[0].name);
  };

  const onChangeInputHandler = (e) => {
    const value = e.target.value;

    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    let avatar = userData.avatar;
    let name = userData.name;
    let surname = userData.surname;
    let bio = userData.bio;
    
    if (!avatar) {
      avatar = undefined;
    }
    
    console.log(avatar);

    if (name === "") {
      name = user.name;
    }

    if (surname === "") {
      surname = user.surname;
    }

    const userObj = {
      uID: user.uID,
      avatar,
      name,
      surname,
      bio,
    };

    dispatch(userEdit(userObj));

    setUserData({
      avatar: "",
      name: "",
      surname: "",
      ...userData,
    });
  };

  return (
    <Container>
      <PersonalsAvatar link={user.profilePicture} />
      <AvatarInputLabel htmlFor="file-upload">
        <InfoChange
          placeholder="Change avatar"
          type="file"
          accept="image/png, image/jpeg"
          id="file-upload"
          onChange={onChangeAvatarHandler}
          name="avatar"
        ></InfoChange>
        {avatarLabel}
      </AvatarInputLabel>
      <Line height="2rem" />
      <InfoLabel>{user.name}</InfoLabel>
      <InfoChange
        placeholder="Change firstname"
        name="name"
        value={userData.name}
        onChange={onChangeInputHandler}
      ></InfoChange>
      <Line height="4.75rem" />
      <InfoLabel>{user.surname}</InfoLabel>
      <InfoChange
        placeholder="Change lastname"
        name="surname"
        value={userData.surname}
        onChange={onChangeInputHandler}
      ></InfoChange>
      <Line height="4.75rem" />
      <InfoLabel>Bio</InfoLabel>
      <AvatarInputLabel htmlFor="bio">Change bio</AvatarInputLabel>
      <Bio
        id="bio"
        value={userData.bio}
        name="bio"
        onChange={onChangeInputHandler}
      ></Bio>
      <SubmitButton onClick={onSubmitHandler}>
        Submit changes<Icon>check</Icon>
      </SubmitButton>
    </Container>
  );
};

export default Personals;
