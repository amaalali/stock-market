import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { initialState as defaultInitialState } from "../redux/store";
import reducer from "../redux/reducers";

export const renderWithRedux = (
  initialState = defaultInitialState
) => component => {
  const store = createStore(reducer, initialState);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};
