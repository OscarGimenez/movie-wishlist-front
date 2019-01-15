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

  addToWishlistHandler = movieCode => {
    this.props.addToWishlist(this.props.username, movieCode);
  };

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
          year={movie.year}
          addToWishlist={() => this.addToWishlistHandler(movie.code)}
          isLoading={movie.loading}
          isInWishlist={movie.isInWishlist}
          isAuthenticated={this.props.isAuthenticated}
        />
      ));
    }

    return (
      <>
        <Hero />
        {loader}
        <div className="container">
          <div className="card-columns">{movies}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    wishlistLoader: state.movies.wishlistLoader,
    username: state.auth.username,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initHomeMovies: () => dispatch(actions.initHomeMovies()),
    addToWishlist: (username, movieCode) =>
      dispatch(actions.addToWishlist(username, movieCode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
