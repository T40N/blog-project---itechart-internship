import { setUser, removeUser } from "../slices/userSlice";

export const logIn = ({ email, password }) => {
  return async (dispatch) => {
    const userId = await loginAttempt({ email, password });

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

export const register = ({ name, surname, password, email }) => {
  return async (dispatch) => {
    const userId = await registerAttempt({ name, surname, password, email });

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
