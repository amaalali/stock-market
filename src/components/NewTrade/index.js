import React from "react";

export const NewTrade = props => (
  <div className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple">
    <form className="mx-4 my-6">
      <div className="flex flex-col lg:flex-row my-2">
        <div className="flex flex-col lg:mr-2">
          <label htmlFor="stock-symbol">
            Symbol
            <span hidden> for stock</span>
          </label>
          <input
            type="text"
            name="stock-symbol"
            id="stock-symbol"
            className="h-8 bg-custom-dark-sea-green border-b border-custom-dark-purple focus:bg-custom-light-sea-green focus:border-0 focus:border-none"
          />
        </div>

        <div className="flex flex-col lg:mx-2">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            className="h-8 bg-custom-dark-sea-green border-b border-custom-dark-purple focus:bg-custom-light-sea-green focus:border-0 focus:border-none"
          />
        </div>

        <div className="flex flex-col lg:ml-2">
          <label htmlFor="number-of-shares">Number of shares</label>
          <input
            type="text"
            name="number-of-shares"
            id="number-of-shares"
            className="h-8 bg-custom-dark-sea-green border-b border-custom-dark-purple focus:bg-custom-light-sea-green focus:border-0 focus:border-none"
          />
        </div>
      </div>

      <button
        type="submit"
        alt="Submit"
        className="bg-custom-light-purple hover:bg-custom-dark-purple text-white rounded-full h-12 w-12 float-right m-4"
      >
        +
      </button>
    </form>
  </div>
);
