import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./App.css";
import OtpValidation from "./components/otpValidation";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </StrictMode>
);

reportWebVitals();
