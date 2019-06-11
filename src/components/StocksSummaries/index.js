import React from "react";
import { connect } from "react-redux";
import SingleTradeRow from "./SingleStockRow";
import { getStocksSummaries } from "../../redux/store";
import { tableRowBackgroundIfEven } from "../helpers";
import { NoTradesFillerRow } from "../NoTradesFillerRow";
import { TableHeaderRow } from "./TableHeaderRow";

const StocksSummaries = ({ stocks = [] } = {}) => {
  const noStocks = stocks.length === 0;

  return (
    <section
      className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple"
      data-testid="stocks-summaries"
    >
      <h2 className="text-lg font-semibold md:text-2xl md:font-normal mx-4 my-6">
        Stocks Summaries
      </h2>
      <table className="flex flex-col mx-4 my-6">
        <TableHeaderRow />
        <tbody className="text-sm md:text-base">
          {noStocks ? (
            <NoTradesFillerRow colSpan={5} />
          ) : (
            stocks.map((stock, index) => (
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
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default connect(getStocksSummaries)(StocksSummaries);
