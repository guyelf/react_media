import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

const el = document.getElementById("root");
const root = createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
