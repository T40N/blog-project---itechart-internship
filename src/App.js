// <<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddingPost from "./pages/addingPostPage";
import Navbar from "./pages/navbar";
import PostsView from "./components/PostsViewPage";
import GlobalStyle from "./GlobalStyle.styled";
import BlogDetails from "./pages/BlogDetails";
import AuthorPage from "./pages/AuthorPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<PostsView />} />
            <Route path="/addingPost" element={<AddingPost />} />
            <Route path="/blogs/:id" element={ <BlogDetails />} />
            <Route path="/:author" element={<AuthorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    // =======

    // const App = () => {
    //   return (
    //     <div className="App">
    //     </div>
    // >>>>>>> cd49c33a277a69cf4a5112dd97245d9bb14ebd05
  );
};

export default App;
