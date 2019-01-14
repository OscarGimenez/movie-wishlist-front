import React from "react";

const card = props => {
  let addButton = null;
  if (props.isAuthenticated) {
    addButton = (
      <div className="card-footer">
        <button
          onClick={props.addToWishlist}
          className="btn btn-xs btn-danger"
        >
          <i className="fas fa-heart" /> Add to my wishlist
        </button>
      </div>
    );
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
      {addButton}
    </div>
  );
};

export default card;
