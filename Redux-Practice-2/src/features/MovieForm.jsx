import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "./movieSlice";
import { useNavigate } from "react-router-dom";

const MovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    movieTitle: "",
    director: "",
    genre: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(formData));
    setFormData({ movieTitle: "", director: "", genre: "" });
    navigate("/");
  };
  return (
    <div>
      <h1>Add Movie</h1>
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
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
