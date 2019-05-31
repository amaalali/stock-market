import { NEW_TRADE } from "./actionTypes";

export function addNewTrade(symbol, price, quantity) {
  return {
    type: NEW_TRADE,
    payload: {
      symbol,
      price,
      quantity
    }
  };
}
