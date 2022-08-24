import { Theme } from "./context";
import GlobalStyle from "./GlobalStyle.styled";

const App = () => {
  return (
    <div className="App">
      <Theme>
        <GlobalStyle />
      </Theme>
    </div>
  );
};

export default App;
