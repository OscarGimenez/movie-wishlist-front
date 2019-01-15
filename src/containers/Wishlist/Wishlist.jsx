import React, { Component } from "react";

import Card from "../../components/Card/Card";
import Loader from "../../components/UI/Loader/Loader";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import classes from "./Wishlist.module.scss";

class Wishlist extends Component {
  componentDidMount() {
    this.props.initWishlist(this.props.username);
  }

  render() {
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

    let content = <Loader />;
    if (!this.props.loading) {
      content = (
        <div className="container">
          <div className="card-columns">
            {movies}
          </div>
        </div>
      );
    }
    return (
      <>
        <h1 className={classes.Wishlist}>My wishlist</h1>
        {content}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.wishlist.movies,
    username: state.auth.username,
    loading: state.wishlist.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initWishlist: (username) => dispatch(actions.initWishlist(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist);
