const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieTitle: String,
  director: String,
  genre: String,
});

const Movie = mongoose.model("movies", MovieSchema);

module.exports = Movie;
