import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { NEW_TRADE } from "./actionTypes";

const initialState = {
  trades: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_TRADE:
      return {
        ...state,
        trades: [...state.trades, action.payload]
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState, devToolsEnhancer());
