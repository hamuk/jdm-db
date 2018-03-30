import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";

import Home from "./containers/Home";
import Gallery from "./containers/Gallery";
import Browse from "./containers/Browse";

import Searchbox from "./components/Searchbox";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

const App = () => (
  <Router>
    <div className="app">
      <Helmet titleTemplate="%s | jdm-db.com">
        <title>JDM-DB</title>
      </Helmet>
      <Searchbox />

      <Tabs>
        <Tab to="/" exact>
          Home
        </Tab>
        <Tab to="/browse">Browse</Tab>
        <Tab to="/gallery">Gallery</Tab>
      </Tabs>

      <Route exact path="/" component={Home} />
      <Route path="/browse" component={Browse} />
      <Route path="/gallery" component={Gallery} />
    </div>
  </Router>
);

export default App;
