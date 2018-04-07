import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import TopBar from "./components/TopBar";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Gallery from "./containers/Gallery";
import Browse from "./containers/Browse";
import PageNotFound from "./components/PageNotFound";
import Register from "./containers/Register";
import Login from "./containers/Login";

import Banner from "./components/Banner";
import Searchbox from "./components/Searchbox";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin() {
    this.setState(ps => ({
      ...ps,
      user: { name: "Jordan" }
    }));
  }

  onLogout() {
    this.setState(ps => ({
      ...ps,
      user: null
    }));
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Helmet titleTemplate="%s | jdm-db.com">
            <title>JDM-DB</title>
          </Helmet>

          <TopBar>
            <Banner user={this.state.user} onLogout={this.onLogout} />
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/browse" component={Browse} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/register" component={Register} />
              <Route
                path="/login"
                render={() => <Login onLogin={this.onLogin} />}
              />}
              <Route component={PageNotFound} />
            </Switch>
          </PageContent>

          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
