import React from "react";
import { render } from "react-testing-library";
import { createStore } from "redux";
import { reducer } from "../redux/store";
import { Provider } from "react-redux";

const defaultInitialState = {
  trades: []
};

export const renderWithRedux = (
  initialState = defaultInitialState
) => component => {
  const store = createStore(reducer, initialState);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};
