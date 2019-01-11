import React, { Component } from "react";

import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Loader from "../../components/UI/Loader/Loader";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class MovieList extends Component {
  componentDidMount() {
    this.props.initHomeMovies();
  }

  render() {
    let loader = null;
    if (this.props.loading) {
      loader = <Loader />;
    }

    let movies = null;
     if (!this.props.loading && this.props.movies) {
      movies = this.props.movies.map(movie => (
        <Card 
        key={movie.code}
        title={movie.title}
        description={movie.description}
        poster={movie.poster}
        year={movie.year}/>
      ));
     }

    return (
      <>
        <Hero />
        {loader}
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
    movies: state.movies.movies,
    loading: state.movies.loading
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
