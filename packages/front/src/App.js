import React from "react";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Admin from "./components/Admin";
import './App.css';

import Signin from "./components/Signin";

const httpLink = new HttpLink ({
  uri: "http://77.228.3.75:4000/",
});

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link : httpLink,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/admin">
            <Signin />
          </Route>

        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
