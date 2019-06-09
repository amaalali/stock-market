import React from "react";
import { connect } from "react-redux";
import { addNewTrade } from "../../redux/actionsCreators";
import InputField from "./InputField";

class NewTrade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "stock-symbol": "",
      "stock-price": "",
      quantity: ""
    };
  }

  onChangeHandler = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  onSubmit = onClickHandler => e => {
    e.preventDefault();
    onClickHandler(
      this.state["stock-symbol"],
      this.state["stock-price"],
      this.state.quantity
    );
    this.setState({
      "stock-symbol": "",
      "stock-price": "",
      quantity: ""
    });
  };

  // TODO: Add validation for form fields here
  validator(e) {
    switch (e.target.name) {
      case "stock-symbol":
        return e;
      case "stock-price":
        return e;
      case "quantity":
        return e;
      default:
        return e;
    }
  }

  render() {
    const { onClick } = this.props;

    return (
      <div className="max-w-3xl m-8 rounded overflow-hidden shadow-lg bg-custom-dark-sea-green text-custom-dark-purple">
        <form className="mx-4 my-6">
          <h2 className="text-lg font-semibold md:text-2xl md:font-normal">
            Enter a new trade
          </h2>

          <div className="flex flex-col lg:flex-row my-2 text-sm md:text-base">
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
                inputName="quantity"
                value={this.state["quantity"]}
                onChange={this.onChangeHandler}
              >
                Quantity
              </InputField>
            </div>
          </div>

          <button
            type="submit"
            alt="Submit new trade"
            className="bg-custom-light-purple text-custom-pale-gold font-bold rounded-full h-12 w-12 float-right m-4 shadow hover:bg-custom-dark-purple hover:shadow-xl"
            onClick={this.onSubmit(onClick)}
            data-testid="submit-trade"
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
