import React from "react";

const SingleTradeRow = ({ symbol, price, quantity }) => (
  <>
    <div className="w-16 mr-16" data-testid="recent-trades__row--symbol">
      {symbol}
    </div>
    <div
      className="w-16 mr-16 font-mono text-right"
      data-testid="recent-trades__row--price"
    >
      {price}
    </div>
    <div
      className="w-16 font-mono text-right"
      data-testid="recent-trades__row--quantity"
    >
      {quantity}
    </div>
  </>
);

export default SingleTradeRow;
