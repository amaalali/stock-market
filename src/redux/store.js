import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import maths from "mathjs";
import GBCEData from "../data/globalBeverageCorporationExchange";
import reducer from "./reducers";
import { normalize, schema } from "normalizr";

const dataSchema = new schema.Entity("stock", {}, { idAttribute: "symbol" });
export const normalizedData = normalize(GBCEData, [dataSchema]);

/*

  Initial state of Store

*/

export const initialState = Object.freeze({
  globalBeverageCorporationExchange: normalizedData,
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

const ARBITRARY_LEVEL_OF_ACCURACY = 4; // Arbitrarily chosen level of accuracy
const asString = (mathJsValue, levelOfAccuracy = ARBITRARY_LEVEL_OF_ACCURACY) =>
  mathJsValue.toFixed(levelOfAccuracy);

const priceAsString = trade => ({ ...trade, price: asString(trade.price) });
export const getTrades = state => ({
  trades: state.tradesChronology.map(priceAsString)
});

export const getStocksSummaries = state => {
  const stockSummaries = Object.values(state.stocksSummaries).map(
    ({
      dividendYield,
      peRatio,
      geometricMean,
      volumeWeightedStockPrice,
      ...stockDetails
    }) => ({
      ...stockDetails,
      peRatio: peRatio ? asString(peRatio) : "N/A",
      dividendYield: dividendYield ? asString(dividendYield) : "N/A",
      geometricMean: asString(geometricMean),
      volumeWeightedStockPrice: asString(volumeWeightedStockPrice)
    })
  );

  return { stocks: stockSummaries };
};

export const getStockSummary = (state, symbol) =>
  state.stocksSummaries[symbol] || {};

export const getExchangeDataForStock = (state, symbol) =>
  state.globalBeverageCorporationExchange.entities.stock[symbol] || {};
/*

  Initialised Redux store
  
*/
export default createStore(reducer, initialState, devToolsEnhancer());
