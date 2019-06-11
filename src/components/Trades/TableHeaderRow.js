import React from "react";

export const TableHeaderRow = () => (
  <thead className="table__header">
    <tr className="flex flex-row mb-2">
      <th className="w-16 mr-16 font-normal">Symbol</th>
      <th className="w-16 mr-16 font-normal">Price</th>
      <th className="w-16 font-normal">Quantity</th>
    </tr>
  </thead>
);
