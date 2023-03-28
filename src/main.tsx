import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Navigation } from "./components/Navigation/Navigation";

import App from "./App";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
