import SideBar from "./components/SideBar";
import { Theme } from "./context";
import GlobalStyle from "./GlobalStyle.styled";

const App = () => {
  return (
    <div className="App">
      <Theme>
        <GlobalStyle />
        <SideBar />
      </Theme>
    </div>
  );
};

export default App;
