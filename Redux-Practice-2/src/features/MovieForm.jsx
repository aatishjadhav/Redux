import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie, updateMovie } from "./movieSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    movieTitle: "",
    director: "",
    genre: "",
  });

  const movieToEdit = location.state?.movie || null;

  useEffect(() => {
    if (movieToEdit) {
      setFormData(movieToEdit);
    }
  }, [movieToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieToEdit) {
      dispatch(updateMovie({ id: movieToEdit, ...formData }));
      navigate("/");
    } else {
      dispatch(addMovie(formData));
      setFormData({ movieTitle: "", director: "", genre: "" });
      navigate("/");
    }
  };
  return (
    <div>
      <h1>{movieToEdit ? "Edit Movie" : "Add Movie"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieTitle"
          value={formData.movieTitle}
          placeholder="Enter Movie Title"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="director"
          value={formData.director}
          placeholder="Enter Movie Director"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          placeholder="Enter Movie Genre"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          {movieToEdit ? "Edit Movie" : "Add Movie"}
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
