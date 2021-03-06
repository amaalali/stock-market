import React from "react";
import { connect } from "react-redux";
import { getTrades } from "../../redux/store";
import Trade from "./SingleTradeRow";
import { tableRowBackgroundIfEven } from "../helpers";
import { NoTradesFillerRow } from "../NoTradesFillerRow";
import { TableHeaderRow } from "./TableHeaderRow";

const tableRowKey = (symbol, price, quantity, createdAt) =>
  createdAt + "-" + symbol + "-" + price + "-" + quantity;

const Trades = ({ trades }) => {
  const noTrades = trades.length === 0;

  return (
    <section
      className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple"
      data-testid="recent-trades"
    >
      <h2 className="text-lg font-semibold md:text-2xl md:font-normal mx-4 my-6">
        Recent Trades
      </h2>
      <table className="mx-4 my-6 flex flex-col text-base md:text-lg">
        <TableHeaderRow />
        <tbody className="text-sm md:text-base">
          {noTrades ? (
            <NoTradesFillerRow colSpan={3} />
          ) : (
            trades.map(({ symbol, price, quantity, createdAt }, index) => (
              <Trade
                key={tableRowKey(symbol, price, quantity, createdAt)}
                className={tableRowBackgroundIfEven(index)}
                symbol={symbol}
                price={price}
                quantity={quantity}
                dataTestId={`recent-trades__row-${index + 1}`}
              />
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default connect(getTrades)(Trades);
