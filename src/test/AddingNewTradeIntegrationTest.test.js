import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRedux } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "../components/index";

afterEach(cleanup);

const renderApp = () => renderWithRedux()(<App />);

test("on submit of a new trade, the trade is displayed in Recent Trades section", async () => {
  const selectors = renderApp();

  enterNewTrade("TRD1", "123.00", "123")(selectors);

  const stocksSummariesSection = selectors.getByTestId("stocks-summaries");

  within(stocksSummariesSection).getByText("TRD1");
});

test("the most recent trade is displayed at the top of the Recent Trades section", async () => {
  const selectors = renderApp();

  enterNewTrade("TRD1", "1", "11")(selectors);
  enterNewTrade("TRD2", "2", "12")(selectors);
  enterNewTrade("TRD3", "3", "13")(selectors);
  enterNewTrade("TRD4", "4", "14")(selectors);
  enterNewTrade("TRD5", "5", "15")(selectors);

  const trades = selectors.getAllByTestId("recent-trades__row--symbol");

  expect(trades.length).toBe(5);
  expect(trades[0]).toHaveTextContent("TRD5");
});

function enterNewTrade(symbol, price, quantity) {
  return ({ getByLabelText, getByTestId }) => {
    const symbolInput = getByLabelText("Symbol for stock");
    userEvent.type(symbolInput, symbol);

    const priceInput = getByLabelText("Price");
    userEvent.type(priceInput, price);

    const quantityInput = getByLabelText("Quantity");
    userEvent.type(quantityInput, quantity);

    userEvent.click(getByTestId("submit-trade"));
  };
}
