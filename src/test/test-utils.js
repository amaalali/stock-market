import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { reducer } from "../redux/store";
import { Provider } from "react-redux";

const defaultInitialState = {
  tradesChronology: [],
  tradesIndex: {},
  stocksSummaries: {}
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
