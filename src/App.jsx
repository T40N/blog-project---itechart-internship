import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ErrorHandler from "./components/ErrorHandler";
import LoaderSpinner from "./components/LoaderSpinner/LoaderSpinner";
import {
  RegisterPage,
  LoginPage,
  ReadPostViewPage,
  AuthorViewPage,
  AddPostPage,
  PostsViewPage,
} from "./pages";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getUser } from "./store/actions/userActions";
import { isUserLoggedIn } from "./api/firebaseAuth";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import { reset } from "./store/slices/handlerSlice";
import { postsGet } from "./store/actions/postsActions";

const App = () => {
  const handlers = useSelector((state) => state.handlers);
  const { type, profilePicture } = useSelector((state) => state.user);
  console.log(profilePicture);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsGet());
    isUserLoggedIn().then((res) => {
      if (res) {
        dispatch(getUser(res));
      } else {
        dispatch(reset());
      }
    });
  }, []);

  return (
    <>
      {handlers.isLoading && <LoaderSpinner />}
      {handlers.isError && <ErrorHandler />}
      <BrowserRouter>
        <SideBar user={{ type, profile_picture: profilePicture }} />
        <Routes>
          <Route exact path="/" element={<PostsViewPage />} />
          <Route path="/addPost" element={<AddPostPage />} />
          <Route path="/blogs/:id" element={<ReadPostViewPage />} />
          <Route path="/:author" element={<AuthorViewPage />} />
          <Route
            path="/login"
            element={
              <GuardedRoute auth={type === 0}>
                <LoginPage />
              </GuardedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuardedRoute auth={type === 0}>
                <RegisterPage />
              </GuardedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
