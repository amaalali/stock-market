import React from "react";

const SingleTradeRow = ({ symbol, price, quantity, dataTestId, className }) => (
  <tr className={"flex flex-row mb-1 " + className} data-testid={dataTestId}>
    <td className="w-16 mr-16" data-testid="recent-trades__row--symbol">
      {symbol}
    </td>
    <td
      className="w-16 mr-16 font-mono text-right"
      data-testid="recent-trades__row--price"
    >
      {price}
    </td>
    <td
      className="w-16 font-mono text-right"
      data-testid="recent-trades__row--quantity"
    >
      {quantity}
    </td>
  </tr>
);

export default SingleTradeRow;
