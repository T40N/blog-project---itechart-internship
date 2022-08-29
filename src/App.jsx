import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorHandler from "./components/ErrorHandler";
import { RegisterPage, LoginPage } from "./pages";

const App = () => {
  return (
    <>
      <ErrorHandler />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
