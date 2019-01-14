import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "./store/actions/index";

import Layout from "./containers/Layout/Layout";
import MovieList from "./containers/MovieList/MovieList";
import Wishlist from "./containers/Wishlist/Wishlist";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Auth} />
        <Route exact path="/" component={MovieList} />
        <Redirect to="/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={MovieList} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchtoProps
  )(App)
);
