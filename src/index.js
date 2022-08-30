import { Theme } from "./context";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.styled";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  </>
);
