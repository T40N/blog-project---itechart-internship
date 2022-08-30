import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ErrorHandler from "./components/ErrorHandler";
import LoaderSpinner from "./components/LoaderSpinner/LoaderSpinner";
import { RegisterPage, LoginPage } from "./pages";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getUser } from "./store/actions/userActions";
import { isUserLoggedIn } from "./api/firebaseAuth";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";

const App = () => {
  const handlers = useSelector((state) => state.handlers);
  const { type, profilePicture } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    isUserLoggedIn().then((res) => {
      if (res) {
        dispatch(getUser(res));
      }
    });
  }, []);

  return (
    <>
      {handlers.isLoading && <LoaderSpinner />}
      {handlers.isError && <ErrorHandler />}
      <BrowserRouter>
      <SideBar user={{type, profile_picture: profilePicture}} />
        <Routes>
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
