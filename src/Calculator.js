import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    input1: "",
    input2: "0",
    total: 0,
    flag: { decimalFlag: 0, operatorsFlag: 0 },
  };

  _handleInputValue1 = (e) => {
    const { input1 } = this.state;
    const operators = "*/+-";
    const decimal = ".";

    if (e.target.value === decimal) {
    }

    if (input1.length >= 1) {
      let charAtLast = input1.charAt(input1.length - 1);
      if (isNaN(e.target.value) && operators.includes(charAtLast)) {
        let temp = input1;
        temp = temp.replace(charAtLast, e.target.value);
        return this.setState({ input1: temp });
      }
    }

    return this.setState({ input1: this.state.input1.concat(e.target.value) });
  };

  _handleInputValue2 = (e) => {
    const { input2 } = this.state;
    const operators = "*/+-";
    const deccimal = ".";

    if (e.target.value === deccimal) {
      if (input2.includes(e.target.value)) return;
      return this.setState({
        input2: this.state.input2.concat(e.target.value),
      });
    }

    if (isNaN(e.target.value) || input2 === "0" || operators.includes(input2)) {
      return this.setState({ input2: e.target.value });
    }

    this.setState({ input2: this.state.input2.concat(e.target.value) });
    // alert(input2)
  };

  _handleResetValue = () => {
    this.setState({ input1: "", input2: "0" });
  };

  _handleCalculateValue = () => {
    const { input1, input2 } = this.state;
    const operators = "*/+-";
    if (operators.includes(input1) && input1.length === 1) {
      return alert("Not a number!");
    }
    alert(eval(input1));
  };

  render() {
    return (
      <div className="calc-body mt-5">
        <div className=" input-show">
          <div>
            <input
              type="text"
              className=""
              value={this.state.input1}
            />
          </div>
          <div>
            <input
              type="text"
              id="last-input"
              className=""
              value={this.state.input2}
            />
          </div>
        </div>
        <div className="row operation-body  ">
          <button
            className="col-6 reset-start"
            value=""
            onClick={this._handleResetValue}
          >
            AC
          </button>
          <button
            className="col-3 operators"
            value="/"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            /
          </button>
          <button
            className="col-3 operators "
            value="*"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            x
          </button>
          <button
            className="col-3 operands  "
            value="7"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            7
          </button>
          <button
            className="col-3 operands "
            value="8"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            8
          </button>
          <button
            className="col-3 operands"
            value="9"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            9
          </button>
          <button
            className="col-3 operators "
            value="-"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            -
          </button>
          <button
            className="col-3 operands"
            value="4"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            4
          </button>
          <button
            className="col-3 operands"
            value="5"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            5
          </button>
          <button
            className="col-3 operands"
            value="6"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            6
          </button>
          <button
            className="col-3 operators "
            value="+"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            +
          </button>
          <button
            className="col-3 operands"
            value="1"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            1
          </button>
          <button
            className="col-3 operands"
            value="2"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            2
          </button>
          <button
            className="col-3 operands"
            value="3"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            3
          </button>
          <button
            className="col-3 equals-to"
            value="="
            onClick={this._handleCalculateValue}
          >
            =
          </button>
          <button
            className="col-6 operands"
            value="0"
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            0
          </button>
          <button
            className="col-3 operands"
            value="."
            onClick={(e) => {
              this._handleInputValue1(e);
              this._handleInputValue2(e);
            }}
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
