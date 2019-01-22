import React from "react";

import Loader from "../UI/WishlistLoader/WishlistLoader";

const card = props => {
  let button = <Loader />;
  //FIXME: Handle better this
  if (!props.isLoading) {
    button = (
      <button onClick={props.addToWishlist} className="btn btn-xs btn-danger">
        <i className="fas fa-heart" /> Add to my wishlist
      </button>
    );
  }

  if (props.isInWishlist) {
    button = <p>In wishlist!</p>;
  }

  if (props.wishlistArea) {
    button = (
      <button onClick={props.removeFromWishlist} className="btn btn-xs btn-danger">
        <i className="fas fa-trash-alt" /> Remove
      </button>
    );
  }

  let footer = null;
  if (props.isAuthenticated) {
    footer = <div className="card-footer">{button}</div>;
  }

  return (
    <div className="card">
      <img className="card-img-top" src={props.poster} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Release year: {props.year}</small>
      </div>
      {footer}
    </div>
  );
};

export default card;
