import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../useFetch';

function Edit() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [body, setBody] = useState("");
  const [genre, setGenre] = useState("Select");
  const {id} = useParams();
  const {data : movie} = useFetch("http://localhost:3100/movies/" + id);
  const navigate = useNavigate();

  useEffect(() => {
    if(movie) {
      setTitle(movie.title);
      setDirector(movie.director);
      setBody(movie.body);
      setGenre(movie.genre);
    }
  },[movie]);

  const updateMovie = (e) => {
  e.preventDefault();
  const movie = {title,director,body,genre}
  fetch("http://localhost:3100/movies/" + id, {
    method : "PATCH",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify(movie)

  }).then(()=> {
    navigate("/")
  })
  }

  return (
    <div>
      {movie && (
        <div className="container mt-5">
        <div className="form">
          <form onSubmit={updateMovie}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Movie Title
              </label>
              <input
                required
                 defaultValue={movie.title}
                 onChange={(e) => setTitle(e.target.value)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                // placeholder="Movie Title"
              />
            </div>
  
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Director
              </label>
              <input
                required
                 defaultValue={movie.director}
                 onChange={(e) => setDirector(e.target.value)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                // placeholder="Movie Title"
              />
            </div>
  
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Body
              </label>
              <textarea
                required
                 defaultValue={movie.body}
                 onChange={(e) => setBody(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                // placeholder="Movie Details"
              ></textarea>
            </div>
  
            <select
              required
                 defaultValue={movie.genre}
                 onChange={(e) => setGenre(e.target.value)}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="select">Select</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Adventure">Adventure</option>
            </select>
  
            <button id="button" className="btn btn-primary mt-3">
              Update
            </button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
}

export default Edit;
