import React from "react";
import { connect } from "react-redux";
import SingleTradeRow from "./SingleStockRow";
import { getStocksSummaries } from "../../redux/store";

const Header = () => (
  <li className="flex flex-row mb-2">
    <div className="text-lg w-16 mr-16">Symbol</div>
    <div className="text-lg w-16 mr-16">Dividend Yield</div>
    <div className="text-lg w-16 mr-16">P/E Ratio</div>
    <div className="text-lg w-16 mr-16">Geometric Mean</div>
    <div className="text-lg w-16 " alt="Volume Weighted Stock Price">
      {/* Volume Weighted Stock Price */}
      Volume Weighted
    </div>
  </li>
);

const StocksSummaries = ({ stocks = [] } = {}) => (
  <div className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple">
    <h2 className="text-2xl mx-4 my-6">Stocks Summaries</h2>
    <div className="mx-4 my-6">
      <ul className="flex flex-col">
        <Header />
        {stocks.map((stock, index) => (
          <li
            key={stock.symbol}
            className="flex flex-row mb-1"
            data-testid={`recent-trades__row-${index + 1}`}
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
  </div>
);

export default connect(getStocksSummaries)(StocksSummaries);
