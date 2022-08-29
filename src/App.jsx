import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage, LoginPage } from "./pages";
import { isUserLoggedIn } from "./api/firebaseAuth";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import LoaderSpinner from "./components/LoaderSpinner/LoaderSpinner";

const App = () => {
  useFetchFirebase;

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      {isLoading && <LoaderSpinner />}
      {userAuth && <h1>{userAuth}</h1>}
    </>
  );
};

export default App;
