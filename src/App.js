// <<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import PostsView from "./components/PostsViewPage";
import GlobalStyle from "./GlobalStyle.styled";
import AuthorPage from "./components/AuthorPage/AuthorPage";
import ReadPost from "./components/ReadPost/ReadPost";
import AddPost from "./components/AddPostPage/AddPost";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<PostsView />} />
            <Route path="/addingPost" element={<AddPost />} />
            <Route path="/blogs/:id" element={ <ReadPost />} />
            <Route path="/author/:id" element={<AuthorPage />} />
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
