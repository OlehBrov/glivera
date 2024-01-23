import React from "react";

import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/glivera">
      <App />
    </HashRouter>
  </React.StrictMode>
);
