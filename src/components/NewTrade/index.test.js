import React from "react";
import { cleanup } from "react-testing-library";
import NewTrade from "./index";
import { renderWithRedux } from "../../test-utils";
import userEvent from "user-event";

afterEach(cleanup);

const renderNewTrade = () => renderWithRedux()(<NewTrade />);

test("renders a form with input elements for stock symbol", async () => {
  const { getByLabelText } = renderNewTrade();

  getByLabelText("Symbol for stock");
});

test("user can enter values in input field for quantity", async () => {
  const { getByLabelText } = renderNewTrade();

  const element = getByLabelText("Symbol for stock");

  userEvent.type(element, "XYZ");

  expect(element).toHaveAttribute("value", "XYZ");
});

test("renders a form with input elements for price", async () => {
  const { getByLabelText } = renderNewTrade();

  getByLabelText("Price");
});

test("user can enter values in input field for quantity", async () => {
  const { getByLabelText } = renderNewTrade();

  const element = getByLabelText("Price");

  userEvent.type(element, "123.00");

  expect(element).toHaveAttribute("value", "123.00");
});

test("renders a form with input elements for quantity of shares", async () => {
  const { getByLabelText } = renderNewTrade();

  getByLabelText("Quantity");
});

test("user can enter values in input field for quantity", async () => {
  const { getByLabelText } = renderNewTrade();

  const element = getByLabelText("Quantity");

  userEvent.type(element, "123");

  expect(element).toHaveAttribute("value", "123");
});

test("on submit of form clears values from input fields", async () => {
  const { getByLabelText, getByTestId } = renderNewTrade();

  const symbolInput = getByLabelText("Symbol for stock");
  userEvent.type(symbolInput, "XYZ");

  const priceInput = getByLabelText("Price");
  userEvent.type(priceInput, "123.00");

  const quantityInput = getByLabelText("Quantity");
  userEvent.type(quantityInput, "123");

  userEvent.click(getByTestId("submit-trade"));

  expect(symbolInput).toHaveAttribute("value", "");
  expect(priceInput).toHaveAttribute("value", "");
  expect(quantityInput).toHaveAttribute("value", "");
});
