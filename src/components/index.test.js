import React from "react";
import {
  cleanup,
  waitForElement,
  waitForDomChange
} from "react-testing-library";
import { renderWithRedux } from "../test-utils";
import userEvent from "user-event";
import App from "./index";
import { Exception } from "handlebars";

afterEach(cleanup);

const renderApp = () => renderWithRedux()(<App />);

const enterNewTrade = (symbol, price, quantity) => ({
  getByLabelText,
  getByTestId
}) => {
  const symbolInput = getByLabelText("Symbol for stock");
  userEvent.type(symbolInput, symbol);

  const priceInput = getByLabelText("Price");
  userEvent.type(priceInput, price);

  const quantityInput = getByLabelText("Quantity");
  userEvent.type(quantityInput, quantity);

  userEvent.click(getByTestId("submit-trade"));
};

test("on submit of a new trade, the trade is displayed in Recent Trades section", async () => {
  const selectors = renderApp();

  enterNewTrade("TRD1", "123.00", "123")(selectors);

  selectors.getByText("TRD1");
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
