import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import MovieList from "./containers/MovieList/MovieList";
import Wishlist from "./containers/Wishlist/Wishlist";
import Auth from "./containers/Auth/Auth";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/wishlist" component={Wishlist} />
        <Route exact path="/" component={MovieList} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <Layout>{routes}</Layout>
    );
  }
}

export default withRouter(App);