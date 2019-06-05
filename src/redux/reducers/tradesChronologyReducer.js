import maths from "mathjs";
import { NEW_TRADE } from "../actionTypes";
import { initialState } from "../store";

// needs an inital state as this is the first reducer called
export function tradesChronologyReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_TRADE:
      const price = maths.bignumber(action.payload.price);
      const newTrade = { ...action.payload, price };

      return {
        ...state,
        tradesChronology: [newTrade, ...state.tradesChronology]
      };
    default:
      return state;
  }
}
