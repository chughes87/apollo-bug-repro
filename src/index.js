import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import React from "react";
import * as ReactDOM from "react-dom/client";

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
