import React from "react";
import { connect } from "react-redux";
import { getTrades } from "../../redux/store";

const Trade = ({ symbol, price, quantity }) => (
  <>
    <div className="w-16 mr-16">{symbol}</div>
    <div className="w-16 mr-16">{price}</div>
    <div className="w-16 ">{quantity}</div>
  </>
);

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

        {trades.map(({ symbol, price, quantity }) => (
          <li className="flex flex-row mb-1">
            <Trade symbol={symbol} price={price} quantity={quantity} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default connect(getTrades)(Trades);
