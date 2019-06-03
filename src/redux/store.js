import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { NEW_TRADE } from "./actionTypes";

const initialState = {
  trades: [],
  stocksSummaries: {}
};

export const getTrades = state => ({ trades: state.trades });
export const getStocksSummaries = state => ({
  stocks: Object.values(state.stocksSummaries)
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_TRADE:
      return {
        ...state,
        trades: [action.payload, ...state.trades]
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState, devToolsEnhancer());
