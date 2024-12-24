import "./views/styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./app/providers/Visibility";
import { Debugger } from "./app/utils/debugger";
import { App } from "./app";

new Debugger([
  {
    action: "setVisibility",
    data: true,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>
);
