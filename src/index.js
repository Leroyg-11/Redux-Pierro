import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
