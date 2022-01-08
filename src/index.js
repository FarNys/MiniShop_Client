import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.scss";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
const allReducers = combineReducers({ productReducer, cartReducer });
const store = createStore(allReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
