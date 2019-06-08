import React from "react";
import { connect } from "react-redux";
import SingleTradeRow from "./SingleStockRow";
import { getStocksSummaries } from "../../redux/store";

const Header = () => (
  <li className="flex flex-row mb-2">
    <div className="text-lg w-20 mr-16 text-center">Symbol</div>
    <div className="text-lg w-20 mr-16 text-center">Dividend Yield</div>
    <div className="text-lg w-20 mr-16 text-center">P/E Ratio</div>
    <div className="text-lg w-20 mr-16 text-center">Geometric Mean</div>
    <div className="text-lg w-20 " alt="Volume Weighted Stock Price">
      {/* Volume Weighted Stock Price */}
      Volume Weighted
    </div>
  </li>
);

const StocksSummaries = ({ stocks = [] } = {}) => {
  return (
    <section
      className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple"
      data-testid="stocks-summaries"
    >
      <h2 className="text-2xl mx-4 my-6">Stocks Summaries</h2>
      <div className="mx-4 my-6">
        <ul className="flex flex-col">
          <Header />
          {stocks.map((stock, index) => (
            <li
              key={stock.symbol}
              className="flex flex-row mb-1"
              data-testid={`stocks-summaries__row-${index + 1}`}
            >
              <SingleTradeRow
                symbol={stock.symbol}
                dividendYield={stock.dividendYield}
                peRatio={stock.peRatio}
                geometricMean={stock.geometricMean}
                volumeWeightedStockPrice={stock.volumeWeightedStockPrice}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default connect(getStocksSummaries)(StocksSummaries);
