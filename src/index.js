import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Admin from "./components/router/admin/Admin";

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
