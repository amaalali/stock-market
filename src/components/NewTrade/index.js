import React from "react";
import { connect } from "react-redux";
import { addNewTrade } from "../../redux/actions";
import InputField from "./InputField";

const handleEvent = eventHandler => (symbol, price, numberOfShares) => e => {
  e.preventDefault();
  eventHandler(symbol, price, numberOfShares);
};

class NewTrade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "stock-symbol": "",
      "stock-price": undefined,
      "number-of-shares": undefined
    };
  }

  onChangeHandler = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  // TODO: Add validation for form fields here
  validator(e) {
    switch (e.target.name) {
      case "stock-symbol":
        return e;
      case "stock-price":
        return e;
      case "number-of-shares":
        return e;
    }
  }

  render() {
    const { onClick } = this.props;

    return (
      <div className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple">
        <form className="mx-4 my-6">
          <h2 className="text-2xl">Enter a new trade</h2>

          <div className="flex flex-col lg:flex-row my-2">
            <div className="flex flex-col lg:mr-2">
              <InputField
                inputName="stock-symbol"
                value={this.state["stock-symbol"]}
                onChange={this.onChangeHandler}
              >
                Symbol
                <span hidden> for stock</span>
              </InputField>
            </div>

            <div className="flex flex-col mt-4 lg:mx-2 lg:mt-0">
              <InputField
                inputName="stock-price"
                value={this.state["stock-price"]}
                onChange={this.onChangeHandler}
              >
                Price
              </InputField>
            </div>

            <div className="flex flex-col mt-4 lg:ml-2 lg:mt-0">
              <InputField
                inputName="number-of-shares"
                value={this.state["number-of-shares"]}
                onChange={this.onChangeHandler}
              >
                Number of shares
              </InputField>
            </div>
          </div>

          <button
            type="submit"
            alt="Submit new trade"
            className="bg-custom-light-purple hover:bg-custom-dark-purple text-white rounded-full h-12 w-12 float-right m-4"
            onClick={handleEvent(onClick)(
              this.state["stock-symbol"],
              this.state["stock-price"],
              this.state["number-of-shares"]
            )}
          >
            +
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { onClick: addNewTrade }
)(NewTrade);
