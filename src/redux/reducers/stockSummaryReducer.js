import maths from "mathjs";

import { getStockSummary, getExchangeDataForStock } from "../store";
import { NEW_TRADE } from "../actionTypes";
import {
  newGeometricProgressionCalculator,
  newVolumeWeightedStockPriceCalculator,
  newDividendYieldCalculator,
  newPERatioCalculator
} from "../../calculators";

export function stockSummaryReducer(state, action) {
  switch (action.type) {
    case NEW_TRADE:
      const { symbol, price, quantity } = action.payload;

      const {
        previousSumTradedPriceQuantity = maths.bignumber(0),
        previousSumQuantity = maths.bignumber(0),
        previousPriceProduct = maths.bignumber(1),
        previousGeometricMeanRoot = 0
      } = getStockSummary(state, symbol);

      const {
        newGeometricMeanRoot,
        newPriceProduct,
        newGeometricMean
      } = newGeometricProgressionCalculator(
        price,
        previousPriceProduct,
        previousGeometricMeanRoot
      );

      const {
        newVolumeWeightedStockPrice,
        newSumTradedPriceQuantity,
        newSumQuantity
      } = newVolumeWeightedStockPriceCalculator(
        price,
        quantity,
        previousSumTradedPriceQuantity,
        previousSumQuantity
      );

      const stockExchangeData = getExchangeDataForStock(state, symbol);

      const newDividendYield = newDividendYieldCalculator(
        price,
        stockExchangeData
      );

      const newPeRatio = newPERatioCalculator(
        price,
        stockExchangeData.lastDividend
      );

      return {
        ...state,
        stocksSummaries: {
          ...state.stocksSummaries,
          [symbol]: {
            symbol,
            ...state.stocksSummaries[symbol],
            peRatio: newPeRatio,
            dividendYield: newDividendYield,
            geometricMean: newGeometricMean,
            previousPriceProduct: newPriceProduct,
            previousGeometricMeanRoot: newGeometricMeanRoot,
            volumeWeightedStockPrice: newVolumeWeightedStockPrice,
            previousSumTradedPriceQuantity: newSumTradedPriceQuantity,
            previousSumQuantity: newSumQuantity
          }
        }
      };

    default:
      return state;
  }
}
