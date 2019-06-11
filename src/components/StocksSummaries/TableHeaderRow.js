import React from "react";

export const TableHeaderRow = () => (
  <thead className="table__header mb-2 text-base md:text-lg">
    <tr className="flex flex-row">
      <th className="w-20 mr-16 text-center font-normal">Symbol</th>
      <th className="w-20 mr-16 text-center font-normal">Dividend Yield</th>
      <th className="w-20 mr-16 text-center font-normal">P/E Ratio</th>
      <th className="w-20 mr-16 text-center font-normal">Geometric Mean</th>
      <th className="w-20 font-normal" alt="Volume Weighted Stock Price">
        {/* Volume Weighted Stock Price */}
        Volume Weighted
      </th>
    </tr>
  </thead>
);
