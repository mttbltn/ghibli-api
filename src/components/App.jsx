import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
