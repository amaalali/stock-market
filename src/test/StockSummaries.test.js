import React from "react";
import { cleanup, within, queryByText } from "@testing-library/react";
import { renderWithRedux } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "../components/index";

afterEach(cleanup);

const statusRowDataIdRegex = /^stocks-summaries__row-\d+$/;

const renderApp = () => renderWithRedux()(<App />);

test("on submit of a new trade, the trade is displayed in Recent Trades section", async () => {
  const selectors = renderApp();

  enterNewTrade("TRD1", "123.00", "123")(selectors);

  const stocksSummariesSection = selectors.getByTestId("stocks-summaries");

  within(stocksSummariesSection).getByText("TRD1");
});

test("on submit of multiple new trades for a stock, a single summary is displayed per stock", async () => {
  const selectors = renderApp();

  enterNewTrade("TRD1", "1", "11")(selectors);
  enterNewTrade("TRD2", "2", "12")(selectors);
  enterNewTrade("TRD1", "3", "13")(selectors);
  enterNewTrade("TRD2", "4", "14")(selectors);
  enterNewTrade("TRD1", "5", "15")(selectors);

  const stocksSummariesSection = selectors.getByTestId("stocks-summaries");

  within(stocksSummariesSection).getByText("TRD1");
  within(stocksSummariesSection).getAllByText("TRD2");
});

test("on submit of a new trade for a stock with no dividend information, Dividend Yield, P/E Ratio, Geometric Mean, and Volume Weighted is shown", async () => {
  const selectors = renderApp();

  enterNewTrade("TRD1", "1", "11")(selectors);
  enterNewTrade("TRD1", "3", "13")(selectors);
  enterNewTrade("TRD1", "5", "15")(selectors);

  const TRD1 = within(
    selectors
      .getAllByTestId(statusRowDataIdRegex)
      .find(summary => within(summary).queryByText("TRD1"))
  );

  const verifyHasValueFor = verifyValueMatcher(TRD1);

  verifyHasValueFor("dividend-yield", "N/A");
  verifyHasValueFor("pe-ratio", "N/A");
  verifyHasValueFor("geometric-mean", "2.4662");
  verifyHasValueFor("volume-weighted-stock-price", "3.2051");
});

function verifyValueMatcher(container) {
  return function(property, isEqualTo) {
    const propertyElement = container.getByTestId(
      `stocks-summaries__row--${property}`
    );

    expect(propertyElement).toHaveTextContent(isEqualTo);
  };
}

function enterNewTrade(symbol, price, quantity) {
  return function({ getByLabelText, getByTestId }) {
    const symbolInput = getByLabelText("Symbol for stock");
    userEvent.type(symbolInput, symbol);

    const priceInput = getByLabelText("Price");
    userEvent.type(priceInput, price);

    const quantityInput = getByLabelText("Quantity");
    userEvent.type(quantityInput, quantity);

    userEvent.click(getByTestId("submit-trade"));
  };
}
