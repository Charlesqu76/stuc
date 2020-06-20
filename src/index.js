import ReactDOM from "react-dom";
import React from "react";
import App from "./App.jsx";
import "./main.css";
import { createStore,combineReducers } from "redux";
import {logReducer,hcLikeReducer } from "./reduxFIles/reducers/allReducer.js";
import { Provider } from "react-redux";





const store = createStore(combineReducers(
  {
    log: logReducer,
    hcLike: hcLikeReducer,
  }
));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
