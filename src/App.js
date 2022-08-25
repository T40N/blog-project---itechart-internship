import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GuardedRoute } from "./components";
import { Theme } from "./context";
import GlobalStyle from "./GlobalStyle.styled";
import { GuardScreenEgzampleToDelete, Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Theme>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/guarded"
              element={
                <GuardedRoute auth={true}>
                  <GuardScreenEgzampleToDelete />
                </GuardedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Theme>
    </div>
  );
};

export default App;
