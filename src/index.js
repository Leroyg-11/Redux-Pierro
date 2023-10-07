import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./_reducers/index.js";
import { getToken } from "./_actions/postTokenAction";
import { getUserProfile } from "./_actions/userProfileAction";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getToken());
store.dispatch(getUserProfile());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
