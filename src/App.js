import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.styled";
import store from "./store";
import Test from "./components/Test";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <Test />
      </Provider>
    </div>
  );
};

export default App;
