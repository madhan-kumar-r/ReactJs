import React from "react";
import useFetch from "../useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: movie,
    error,
    isPending,
  } = useFetch("http://localhost:3100/movies/" + id);

  const handleClick = () => {
    fetch("http://localhost:3100/movies/" + movie.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div className="card text-center mb-3 m-5 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.director}</p>
            <p className="card-text">{movie.body}</p>
            <p className="card-text">{movie.genre}</p>

            <Link to={`/edit/${movie.id}`}  className="btn btn-primary m-4">Edit</Link >
            <button onClick={handleClick} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
