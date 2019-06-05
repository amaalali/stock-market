import { NEW_TRADE } from "./actionTypes";
import { TimeStamp } from "../utils/DateStampGenerator";

export function addNewTrade(symbol, price, quantity) {
  return {
    type: NEW_TRADE,
    payload: {
      symbol,
      price,
      quantity,
      createdAt: TimeStamp()
    }
  };
}
