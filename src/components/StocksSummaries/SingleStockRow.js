import React from "react";

const SingleTradeRow = ({
  symbol,
  dividendYield,
  peRatio,
  geometricMean,
  volumeWeightedStockPrice
}) => (
  <>
    <div
      className="w-20 mr-16 test-left"
      data-testid="stocks-summaries__row--symbol"
    >
      {symbol}
    </div>

    <div
      className="w-20 mr-16 text-right font-mono"
      data-testid="stocks-summaries__row--dividend-yield"
    >
      {dividendYield}
    </div>

    <div
      className="w-20 mr-16 text-right font-mono"
      data-testid="stocks-summaries__row--pe-ratio"
    >
      {peRatio}
    </div>

    <div
      className="w-20 mr-16 text-right font-mono"
      data-testid="stocks-summaries__row--geometric-mean"
    >
      {geometricMean}
    </div>

    <div
      className="w-20 text-right font-mono"
      data-testid="stocks-summaries__row--volume-weighted-stock-price"
    >
      {volumeWeightedStockPrice}
    </div>
  </>
);

export default SingleTradeRow;
