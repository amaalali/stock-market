import React from "react";
import "./index.css";

const NewTrade = props => {
  return (
    <div className="foo">
      <form className="">
        <label htmlFor="stock-symbol">Symbol</label>
        <input type="text" name="stock-symbol" id="stock-symbol" />

        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />

        <label htmlFor="number-of-shares">Number of shares</label>
        <input type="text" name="number-of-shares" id="number-of-shares" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <main className="app-main">
      <NewTrade />
    </main>
  );
}

export default App;
