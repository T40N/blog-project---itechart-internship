import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddingPost from "./pages/addingPostPage";
import Navbar from "./pages/navbar";
import PostsView from "./pages/postsViewPage";
import GlobalStyle from "./GlobalStyle.styled";
import BlogDetails from "./pages/BlogDetails";
import AuthorPage from "./pages/AuthorPage";
import PostSnippet from "./components/PostSnippet";

const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <PostsView />
            </Route>
            <Route path="/addingPost">
              <AddingPost />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/:author">
              <AuthorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
