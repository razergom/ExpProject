import React from "react";
import ReactDOM from "react-dom";

import App from "./app.jsx";
import Service from "./Service.js";

ReactDOM.render(
  <App service={new Service()} />,
  document.getElementById("#app")
);
