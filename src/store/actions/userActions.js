import { setUser, removeUser } from "../slices/userSlice";

export const logIn = ({ name, surname, email, password }) => {
  return async (dispatch) => {
    const userId = await registerFirebase({ name, surname, email, password });

    const { uID, bio, type, date_of_register, posts } = await getUserFirebase(
      userId
    );

    dispatch(
      setUser({
        uID,
        name,
        surname,
        email,
        bio,
        type: +type,
        date_of_register,
        posts,
      })
    );
  };
};

export const logOut = () => {
  return async (dispatch) => {
    await logOutFirebase();

    dispatch(removeUser());
  };
};
