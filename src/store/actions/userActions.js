import { setUser, removeUser } from "../slices/userSlice";
import { getUserInfo } from "../../api/firestoreResources";
import {
  registerAttempt,
  loginAttempt,
  logoutAttempt,
} from "../../api/firebaseAuth";
import { formatDate } from "../../helpers";

export const logIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const userId = await loginAttempt({ email, password });

      try {
        const { uID, bio, type, date_of_register, posts, name, surname } =
          await getUserInfo(userId);

        const dateOfRegisterObject = date_of_register.toDate();

        dispatch(
          setUser({
            uID,
            name,
            surname,
            email,
            bio,
            type: +type,
            date_of_register: dateOfRegisterObject,
            posts,
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
        const { uID, bio, type, date_of_register, posts } = await getUserInfo(
          userId
        );

        const dateOfRegisterObject = formatDate(date_of_register.toDate());

        console.log(dateOfRegisterObject);
        dispatch(
          setUser({
            uID,
            name,
            surname,
            email,
            bio,
            type: +type,
            date_of_register: dateOfRegisterObject,
            posts,
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
