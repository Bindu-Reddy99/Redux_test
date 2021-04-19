import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1
        style={{border:'pink'}}
         className="col-md-2">{this.props.counter}</h1>

        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "green" }}
          onClick={() => this.props.increment()}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "red" }}
          onClick={() => this.props.decrement()}
        >
          Decrement
        </button>
      </div>
    );
  }
}

const loadInitialValues = (state) => {
  return { counter: state.counter };
};

const callReducerAction = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT", add_plus: 1 });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT", add_minus: 1 });
    },
  };
};

export default connect(loadInitialValues, callReducerAction)(Counter);
