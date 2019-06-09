import React from "react";
import { connect } from "react-redux";
import { getTrades } from "../../redux/store";
import Trade from "./SingleTradeRow";
import maths from "mathjs";
import { tableRowBackgroundIfEven } from "../helpers";

const tableRowKey = (symbol, price, quantity, createdAt) =>
  createdAt + "-" + symbol + "-" + price + "-" + quantity;

const Trades = ({ trades }) => (
  <section
    className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple"
    data-testid="recent-trades"
  >
    <h2 className="text-2xl mx-4 my-6">Recent Trades</h2>
    <table className="mx-4 my-6 flex flex-col">
      <thead className="table__header">
        <tr className="flex flex-row mb-2">
          <th className="text-lg w-16 mr-16">Symbol</th>
          <th className="text-lg w-16 mr-16">Price</th>
          <th className="text-lg w-16 ">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {trades.map(({ symbol, price, quantity, createdAt }, index) => (
          <Trade
            className={tableRowBackgroundIfEven(index)}
            key={tableRowKey(symbol, price, quantity, createdAt)}
            symbol={symbol}
            price={maths.string(price)}
            quantity={quantity}
            dataTestId={`recent-trades__row-${index + 1}`}
          />
        ))}
      </tbody>
    </table>
  </section>
);

export default connect(getTrades)(Trades);
