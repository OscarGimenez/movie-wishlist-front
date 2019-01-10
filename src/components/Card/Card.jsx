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
        <h5 className="card-title">Movie title</h5>
        <p className="card-text">
          Some text about the movie. Some text about the movie. Some text about
          the movie. Some text about the movie. Some text about the movie. Some
          text about the movie.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">This is the place for the buttons</small>
      </div>
    </div>
  );
};

export default card;
