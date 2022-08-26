<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
=======
import { Theme } from "./context";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.styled";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
>>>>>>> cd49c33a277a69cf4a5112dd97245d9bb14ebd05

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>
);
