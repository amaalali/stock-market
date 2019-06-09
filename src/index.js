import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import { Provider } from "react-redux";

function Header() {
  return (
    <header className="flex flex-row items-center bg-custom-light-purple h-16 shadow-lg tracking-tight sticky top-0">
      <h1 className="text-custom-pale-gold text-xl font-semibold md:text-4xl md:font-normal ml-12 mr-12">
        Super Simple Stock Market
      </h1>
    </header>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <main className="pagelayout__main">
      <Header />
      <App />
    </main>
  </Provider>,
  document.getElementById("root")
);

// TODO: Change unregister() to register() to enable installation and offline work.
// TL;DR on service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
