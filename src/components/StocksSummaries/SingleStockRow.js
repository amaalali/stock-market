import React from "react";

const SingleTradeRow = ({
  symbol,
  dividendYield,
  peRatio,
  geometricMean,
  volumeWeightedStockPrice,
  dataTestId,
  className
}) => (
  <tr className={"flex flex-row mb-1 " + className} data-testid={dataTestId}>
    <td
      className="w-20 mr-16 test-left"
      data-testid="stocks-summaries__row--symbol"
    >
      {symbol}
    </td>

    <td
      className="w-20 mr-16 text-right font-mono"
      data-testid="stocks-summaries__row--dividend-yield"
    >
      {dividendYield}
    </td>

    <td
      className="w-20 mr-16 text-right font-mono"
      data-testid="stocks-summaries__row--pe-ratio"
    >
      {peRatio}
    </td>

    <td
      className="w-20 mr-16 text-right font-mono"
      data-testid="stocks-summaries__row--geometric-mean"
    >
      {geometricMean}
    </td>

    <td
      className="w-20 text-right font-mono"
      data-testid="stocks-summaries__row--volume-weighted-stock-price"
    >
      {volumeWeightedStockPrice}
    </td>
  </tr>
);

export default SingleTradeRow;
