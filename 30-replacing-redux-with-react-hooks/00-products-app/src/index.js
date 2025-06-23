import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
// import ProductContextProvider from "./context/product-context";
import configureProductStore from "./hooks-store/products-store";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

configureProductStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
