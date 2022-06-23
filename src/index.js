import React from "react";
import {BrowserRouter} from "react-router-dom"
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>{/* Esse browserRouter é o pai de todos as Func do React Router, Ele está na index.js para englobar todo o projeto. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
