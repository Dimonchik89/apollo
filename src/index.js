import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
