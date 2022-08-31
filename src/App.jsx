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
  PersonalsPage,
  PostViewPage,
  MyPostsViewPage
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

  console.log(type);

  return (
    <>
      {handlers.isLoading && <LoaderSpinner />}
      {handlers.isError && <ErrorHandler />}
      <BrowserRouter>
        <SideBar user={{ type, profile_picture: profilePicture }} />
        <Routes>

        <Route exact path="/" element={<PostsViewPage />} />
            <Route path="/addPost" element={<AddPostPage />} />
            <Route path="/blogs/:id" element={ <PostViewPage />} />
            <Route path="/author/:id" element={<AuthorViewPage />} />
            <Route path="/myPosts" element={<MyPostsViewPage />} />
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
          <Route
            path="/personals"
            element={
              <GuardedRoute auth={(type) >= 1}>
                <PersonalsPage />
              </GuardedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
