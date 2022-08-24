<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddingPost from "./pages/addingPostPage";
import Navbar from './pages/navbar';
import PostsView from "./pages/postsViewPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <PostsView />
            </Route>
            <Route path="/addingPost">
              <AddingPost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
=======
import GlobalStyle from "./GlobalStyle.styled";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
};
>>>>>>> fec4356849869956daab6503cd4347576a665602

export default App;
