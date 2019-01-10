import React, { Component } from "react";

import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class MovieList extends Component {
  componentDidMount() {
    this.props.initHomeMovies();
  }

  render() {
    return (
      <>
        <Hero />
        <div className="container">
          <div className="card-columns">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initHomeMovies: () => dispatch(actions.setHomeMovies())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieList);
