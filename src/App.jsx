import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { RegisterPage, LoginPage } from "./pages";

const dummyJSON = {
  type: 3,
  profile_picture: 'https://firebasestorage.googleapis.com/v0/b/test-project-96eaa.appspot.com/o/avatars%2Favatar.bmp?alt=media&token=7316e231-173a-4e64-ae14-ff6f13d09bdd',
}

const App = () => {
  return (
    <BrowserRouter>
      <SideBar user={dummyJSON}/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
