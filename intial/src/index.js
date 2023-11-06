// step1 : import React and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Get a refernce to a id element
const root = ReactDOM.createRoot(document.getElementById("root"));

// show component on screen
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
