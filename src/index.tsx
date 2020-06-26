import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import Service from "./Service";

ReactDOM.render(
  <App service={new Service()} />,
  document.getElementById("#app")
);
