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
    
    //TODO: AQUI PUEDO HACER EL FOREACH!!!! GUAU!!!!
    console.log("ASDSD", this.props.movies);

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

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initHomeMovies: () => dispatch(actions.initHomeMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
