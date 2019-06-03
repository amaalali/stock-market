import React from "react";

const SingleTradeRow = ({
  symbol,
  dividendYield,
  peRatio,
  geometricMean,
  volumeWeightedStockPrice
}) => (
  <>
    <div className="w-16 mr-16" data-testid="stocks-summaries__row--symbol">
      {symbol}
    </div>

    <div
      className="w-16 mr-16"
      data-testid="stocks-summaries__row--dividend-yield"
    >
      {dividendYield}
    </div>

    <div className="w-16 mr-16" data-testid="stocks-summaries__row--pe-ratio">
      {peRatio}
    </div>

    <div
      className="w-16 mr-16"
      data-testid="stocks-summaries__row--geometric-mean"
    >
      {geometricMean}
    </div>

    <div
      className="w-16"
      data-testid="stocks-summaries__volume-weighted-stock-price"
    >
      {volumeWeightedStockPrice}
    </div>
  </>
);

export default SingleTradeRow;
