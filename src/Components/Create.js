import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [body, setBody] = useState("");
  const [genre, setGenre] = useState("Select");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { title, director, body, genre };
    console.log(movie);

    fetch('http://localhost:3100/movies/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie)
      }).then(() => {
        console.log('new movie added');
        navigate('/');
      })
  };
  return (
    <div className="container mt-5">
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Movie Title
          </label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Movie Title"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Director
          </label>
          <input
            required
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Movie Title"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Body
          </label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Movie Details"
          ></textarea>
        </div>

        <select
          required
          value={genre}
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
          Add Blog
        </button>
      </form>
    </div>
    </div>
  );
}

export default Create;
