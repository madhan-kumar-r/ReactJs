import MoviesCard from "./MoviesCard";
import useFetch from "../useFetch";

function Home() {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:3100/movies");

  return (
    <div>
      {/* <MoviesCard movies={movies} handleDelete={handleDelete} /> */}
      {error && <div>{error}</div>}
      {isPending && <h3 className="text-center">Loading...</h3>}
      {movies && <MoviesCard movies={movies} />}
    </div>
  );
}

export default Home;
