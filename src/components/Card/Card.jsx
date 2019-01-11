import React from "react";

const card = props => {
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
      <div className="card-footer">
        <a href="#" className="btn btn-xs btn-danger">
          <i className="fas fa-heart" /> Add to my wishlist
        </a>
      </div>
    </div>
  );
};

export default card;
