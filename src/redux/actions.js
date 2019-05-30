import { NEW_TRADE } from "./actionTypes";

export function addNewTrade(symbol, price, numberOfShares) {
  return {
    type: NEW_TRADE,
    payload: {
      symbol,
      price,
      numberOfShares
    }
  };
}
