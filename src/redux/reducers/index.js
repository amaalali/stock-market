import reduceReducers from "reduce-reducers";

import { stockSummaryReducer } from "./stockSummaryReducer";
import { tradesChronologyReducer } from "./tradesChronologyReducer";

/*

  Composed Reducers
  
*/

export default reduceReducers(tradesChronologyReducer, stockSummaryReducer);
