import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.styled";
import store from "./store";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}></Provider>
    </div>
  );
};

export default App;
