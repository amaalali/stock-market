import { createStore } from "redux";
import reduceReducers from "reduce-reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import maths from "mathjs";
import GBCE from "../data/globalBeverageCorporationExchange";
import { stockSummaryReducer } from "./reducers/volumeWeigthedStockPriceReducer";
import { tradesChronologyReducer } from "./reducers/tradesChronologyReducer";

/*
  Initial Store
*/
export const initialState = Object.freeze({
  globalBeverageCorporationExchange: GBCE.data,
  tradesChronology: [],
  stockTradeIndex: {},
  stocksSummaries: {}
});

/*
  Stock Summary shape
    {
      symbol: String,
      dividendYield: Math.BigNumber,
      peRatio: Math.BigNumber,
      geometricMean: Math.BigNumber,
      previousPriceProduct: Math.BigNumber,
      previousGeometricMeanRoot: Number,
      volumeWeightedStockPrice: Math.BigNumber,
      previousSumTradedPriceQuantity: Math.BigNumber,
      previousSumQuantity: Math.BigNumber,
      },
    }
*/

const priceAsString = trade => ({ ...trade, price: maths.string(trade.price) });

/*
  Store Getters
*/
export const getTrades = state => ({
  trades: state.tradesChronology.map(priceAsString)
});

// Arbitrarily chosen level of accuracy
const ARBITRARY_LEVEL_OF_ACCURACY = 4;
const asString = (mathJsValue, levelOfAccuracy = ARBITRARY_LEVEL_OF_ACCURACY) =>
  mathJsValue.toFixed(levelOfAccuracy);

export const getStocksSummaries = state => {
  const stockSummaries = Object.values(state.stocksSummaries).map(x => ({
    symbol: x.symbol,
    dividendYield: x.dividendYield,
    peRatio: x.peRatio,
    geometricMean: asString(x.geometricMean),
    volumeWeightedStockPrice: asString(x.volumeWeightedStockPrice)
  }));

  return { stocks: stockSummaries };
};

export const getStockSummary = (state, symbol) =>
  state.stocksSummaries[symbol] || {};

/*
  Composed Reducers
*/
export const reducer = reduceReducers(
  tradesChronologyReducer,
  stockSummaryReducer
);

/*
  Initialised Redux store
*/
export default createStore(reducer, initialState, devToolsEnhancer());
