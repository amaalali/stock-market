import React from "react";
import NewTrade from "./NewTrade";
import Trades from "./Trades";
import StocksSummaries from "./StocksSummaries";

export default function App() {
  return (
    <div className="pagelayout__content">
      <NewTrade />

      <Trades />

      <StocksSummaries />
    </div>
  );
}
