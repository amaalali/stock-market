import { createStore } from "redux";
import reduceReducers from "reduce-reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import maths from "mathjs";
import reducer from "./reducers";

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

/*

  Store Getters

*/
const priceAsString = trade => ({ ...trade, price: maths.string(trade.price) });
export const getTrades = state => ({
  trades: state.tradesChronology.map(priceAsString)
});

const ARBITRARY_LEVEL_OF_ACCURACY = 4; // Arbitrarily chosen level of accuracy
const asString = (mathJsValue, levelOfAccuracy = ARBITRARY_LEVEL_OF_ACCURACY) =>
  mathJsValue.toFixed(levelOfAccuracy);

export const getStocksSummaries = state => {
  const stockSummaries = Object.values(state.stocksSummaries).map(
    ({ geometricMean, volumeWeightedStockPrice, ...stockDetails }) => ({
      ...stockDetails,
      geometricMean: asString(geometricMean),
      volumeWeightedStockPrice: asString(volumeWeightedStockPrice)
    })
  );

  return { stocks: stockSummaries };
};

export const getStockSummary = (state, symbol) =>
  state.stocksSummaries[symbol] || {};

/*

  Initialised Redux store
  
*/
export default createStore(reducer, initialState, devToolsEnhancer());
