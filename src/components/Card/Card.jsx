import React from "react";

const card = props => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="img/movie-poster-placeholder.jpg"
        alt="Poster placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Release year: {props.year}</small>
      </div>
    </div>
  );
};

export default card;
