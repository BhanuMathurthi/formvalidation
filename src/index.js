import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
