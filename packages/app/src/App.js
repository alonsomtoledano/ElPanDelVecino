import React from "react";
import { RecoilRoot } from "recoil";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createUploadLink } from "apollo-upload-client";

import Home from "./components/Home";
import Admin from "./components/Admin";
import './App.css';

const client = new ApolloClient ({
  link: createUploadLink({ uri: "http://77.228.3.75:4000/" }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

          </Switch>
        </Router>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default App;
