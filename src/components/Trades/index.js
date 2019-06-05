import React from "react";
import { connect } from "react-redux";
import { getTrades } from "../../redux/store";
import Trade from "./SingleTradeRow";
import maths from "mathjs";

const Trades = ({ trades }) => (
  <div className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple">
    <h2 className="text-2xl mx-4 my-6">Recent Trades</h2>
    <div className="mx-4 my-6">
      <ul className="flex flex-col">
        <li className="flex flex-row mb-2">
          <div className="text-lg w-16 mr-16">Symbol</div>
          <div className="text-lg w-16 mr-16">Price</div>
          <div className="text-lg w-16 ">Quantity</div>
        </li>

        {trades.map(({ symbol, price, quantity, createdAt }, index) => (
          <li
            key={
              createdAt + "-" + symbol + "-" + maths.string(price) + "quantity"
            }
            className="flex flex-row mb-1"
            data-testid={`recent-trades__row-${index + 1}`}
          >
            <Trade
              symbol={symbol}
              price={maths.string(price)}
              quantity={quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default connect(getTrades)(Trades);
