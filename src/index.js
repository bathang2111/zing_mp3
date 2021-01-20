import React from "react";
import { render } from "react-dom";
import App from "./app/App/App";
import { Globalstyled } from "./app/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

render(
  <>
    <Provider store={store}>
      <Globalstyled />
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);
