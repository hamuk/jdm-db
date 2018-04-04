import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import TopBar from "./components/TopBar";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Gallery from "./containers/Gallery";
import Browse from "./containers/Browse";

import Searchbox from "./components/Searchbox";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

const App = () => (
  <Router>
    <React.Fragment>
      <Helmet titleTemplate="%s | jdm-db.com">
        <title>JDM-DB</title>
      </Helmet>

      <TopBar>
        <Searchbox />

        <Tabs>
          <Tab to="/" exact>
            Home
          </Tab>
          <Tab to="/browse">Browse</Tab>
          <Tab to="/gallery">Gallery</Tab>
        </Tabs>
      </TopBar>

      <PageContent>
        <Route exact path="/" component={Home} />
        <Route path="/browse" component={Browse} />
        <Route path="/gallery" component={Gallery} />
      </PageContent>

      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
