import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchMovies } from "./movieSlice";
import { Link } from 'react-router-dom';

const MovieView = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  console.log("Movies from view", movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  return (
    <div>
      <h1>Movie List</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="list-group">
        {movies.map((movie) => (
          <li className="list-group-item" key={movie._id}>
            Title: {movie.movieTitle} - Director: {movie.director} - Genre:{" "}
            {movie.genre}{" "}
            <Link className="btn btn-warning float-end mx-4" to={`/edit-movie/${movie._id}`} state={{movie}}>Edit</Link>
            <button
              className="btn btn-danger float-end"
              onClick={() => handleDelete(movie._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieView;
