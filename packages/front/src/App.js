import React from "react";
import { RecoilRoot } from "recoil";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createUploadLink } from "apollo-upload-client";    

import Home from "./components/Home";
import Admin from "./components/Admin";
import './App.css';

// const httpLink = new HttpLink ({
//   uri: "http://77.228.3.75:4000/",
// });

const client = new ApolloClient ({
  link: createUploadLink({ uri: "http://77.228.3.75:4000/" }),
  cache: new InMemoryCache()
  // link : httpLink,
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
