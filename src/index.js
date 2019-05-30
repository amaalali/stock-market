import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// TODO: Change unregister() to register() to enable installation and offline work.
// TL;DR on service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
