import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/components/App";
import { createStore } from "redux";
import { counterReducer } from "./component/reducer/Counter_Reducer.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={createStore(counterReducer)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);