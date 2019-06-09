import React from "react";
import { connect } from "react-redux";
import SingleTradeRow from "./SingleStockRow";
import { getStocksSummaries } from "../../redux/store";
import { tableRowBackgroundIfEven } from "../helpers";

const StocksSummaries = ({ stocks = [] } = {}) => {
  return (
    <section
      className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple"
      data-testid="stocks-summaries"
    >
      <h2 className="text-2xl mx-4 my-6">Stocks Summaries</h2>
      <table className="flex flex-col mx-4 my-6">
        <thead className="table__header mb-2">
          <tr className="flex flex-row">
            <th className="text-lg w-20 mr-16 text-center">Symbol</th>
            <th className="text-lg w-20 mr-16 text-center">Dividend Yield</th>
            <th className="text-lg w-20 mr-16 text-center">P/E Ratio</th>
            <th className="text-lg w-20 mr-16 text-center">Geometric Mean</th>
            <th className="text-lg w-20 " alt="Volume Weighted Stock Price">
              {/* Volume Weighted Stock Price */}
              Volume Weighted
            </th>
          </tr>
        </thead>
        {stocks.map((stock, index) => (
          <SingleTradeRow
            className={tableRowBackgroundIfEven(index)}
            key={stock.symbol}
            symbol={stock.symbol}
            dividendYield={stock.dividendYield}
            peRatio={stock.peRatio}
            geometricMean={stock.geometricMean}
            volumeWeightedStockPrice={stock.volumeWeightedStockPrice}
            dataTestId={`stocks-summaries__row-${index + 1}`}
          />
        ))}
      </table>
    </section>
  );
};

export default connect(getStocksSummaries)(StocksSummaries);
