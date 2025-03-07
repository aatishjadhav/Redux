

require("dotenv").config();
const Movie = require('./models/movie.models');
const {initializeDb} = require("./db/db.connect");
initializeDb();

const cors = require('cors');
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/movies", async (req, res) => {
  try {
    const getAllMovies = await Movie.find();
    if (getAllMovies) {
      res.status(200).json(getAllMovies);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/movies", async (req, res) => {
  try {
    const { movieTitle, director, genre } = req.body;
    const addNew = new Movie({ movieTitle, director, genre });
    await addNew.save();
    res.status(201).json(addNew);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", error });
  }
});

app.put("/movies/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const dataToUpdate = req.body;
    const updatedData = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
      new: true,
    });
    if (updatedData) {
      res
        .status(200)
        .json({ message: "Movie updated successfully", book: updatedData });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/movies/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    if (deletedMovie) {
      res
        .status(200)
        .json({ message: "Movie deleted successfully", book: deletedMovie });
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
