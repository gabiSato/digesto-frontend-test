import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

import App from "./App";

import "./styles/main.scss";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.defaults.headers.common[
  "Authorization"
] = `${process.env.REACT_APP_AUTH_METHOD} ${process.env.REACT_APP_API_TOKEN}`;

axios.defaults.headers.post["Content-Type"] = "application/json";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
