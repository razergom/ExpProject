import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./app";
import Service from "./Service";

ReactDOM.render(
  <App service={new Service()} />,
  document.getElementById("#app")
);
