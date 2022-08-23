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

export default App;
