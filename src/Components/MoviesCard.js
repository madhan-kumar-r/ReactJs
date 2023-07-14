import React from "react";
import { Link } from "react-router-dom";

function MoviesCard({ movies }) {
  return (
    <div className="container">
      <div className="row mt-5">
        {movies.map((movie) => (
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div
              key={movie.id}
              className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-secondary ">{movie.director}</p>
                <p className="card-text text-primary-emphasis text-opacity-50">
                  {movie.genre}
                </p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesCard;
