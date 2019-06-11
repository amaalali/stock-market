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
        cachedSumTradedPriceQuantity = maths.bignumber(0),
        cachedSumQuantity = maths.bignumber(0),
        cachedPriceProduct = maths.bignumber(1),
        cachedGeometricMeanRoot = 0
      } = getStockSummary(state, symbol);

      const geometricMeanCalculations = newGeometricProgressionCalculator(
        price,
        cachedPriceProduct,
        cachedGeometricMeanRoot
      );

      const volumeWeightedStockPriceCalculations = newVolumeWeightedStockPriceCalculator(
        price,
        quantity,
        cachedSumTradedPriceQuantity,
        cachedSumQuantity
      );

      const stockExchangeData = getExchangeDataForStock(state, symbol);

      const dividendYield = newDividendYieldCalculator(
        price,
        stockExchangeData
      );

      const peRatio = newPERatioCalculator(
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
            ...geometricMeanCalculations,
            ...volumeWeightedStockPriceCalculations,
            peRatio,
            dividendYield
          }
        }
      };

    default:
      return state;
  }
}
