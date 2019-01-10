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
    
    // TODO: MAKE A SPINNER!
    // let movies = <Spinner />;
    let movies = null;
    // if (!this.props.loading) {
      if (this.props.movies) {
        movies = this.props.movies.map(movie => (
        <Card 
        key={movie.code}
        title={movie.title}
        description={movie.description}
        year={movie.year}/>
      ));
    }

    return (
      <>
        <Hero />
        <div className="container">
          <div className="card-columns">
            {movies}
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
