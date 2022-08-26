import { setUser, removeUser } from "../slices/userSlice";
import { editUser, getUserInfo } from "../../api/firestoreResources";
import {
  registerAttempt,
  loginAttempt,
  logoutAttempt,
} from "../../api/firebaseAuth";
import { formatDate } from "../../helpers";

export const getUser = (uID) => {
  return async (dispatch) => {
    try {
      const {
        bio,
        type,
        date_of_register,
        posts,
        name,
        surname,
        profile_picture,
      } = await getUserInfo(uID);

      const dateOfRegisterObject = formatDate(date_of_register.toDate());

      dispatch(
        setUser({
          uID: userId,
          name,
          surname,
          email,
          bio,
          type: +type,
          date_of_register: dateOfRegisterObject,
          posts,
          profilePicture: profile_picture,
        })
      );
    } catch (err) {
      throw err;
    }
  };
};

export const userEdit = ({ uID, ...props }) => {
  return async (dispatch) => {
    try {
      await editUser({ uID, ...props });

      try {
        const {
          bio,
          type,
          date_of_register,
          posts,
          name,
          surname,
          profile_picture,
        } = await getUserInfo(uID);

        const dateOfRegisterObject = formatDate(date_of_register.toDate());

        dispatch(
          setUser({
            uID: userId,
            name,
            surname,
            email,
            bio,
            type: +type,
            date_of_register: dateOfRegisterObject,
            posts,
            profilePicture: profile_picture,
          })
        );
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  };
};

export const logIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const userId = await loginAttempt({ email, password });

      try {
        const {
          bio,
          type,
          date_of_register,
          posts,
          name,
          surname,
          profile_picture,
        } = await getUserInfo(userId);

        const dateOfRegisterObject = formatDate(date_of_register.toDate());

        dispatch(
          setUser({
            uID: userId,
            name,
            surname,
            email,
            bio,
            type: +type,
            date_of_register: dateOfRegisterObject,
            posts,
            profilePicture: profile_picture,
          })
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const register = ({ name, surname, password, email }) => {
  return async (dispatch) => {
    try {
      const userId = await registerAttempt({ name, surname, password, email });

      try {
        const { bio, type, date_of_register, posts, profile_picture } =
          await getUserInfo(userId);

        const dateOfRegisterObject = formatDate(date_of_register.toDate());

        console.log(dateOfRegisterObject);
        dispatch(
          setUser({
            uID: userId,
            name,
            surname,
            email,
            bio,
            type: +type,
            date_of_register: dateOfRegisterObject,
            posts,
            profilePicture: profile_picture,
          })
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    try {
      await logoutAttempt();

      dispatch(removeUser());
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
