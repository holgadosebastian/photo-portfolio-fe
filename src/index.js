import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import App from './App';
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";

window.client = client;

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
