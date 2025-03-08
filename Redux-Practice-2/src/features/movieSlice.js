import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:4000/movies";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(BASE_URL);
  console.log(response);

  return response.data;
});

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
  const response = await axios.post(BASE_URL, movie);
  console.log("added movie", response);
  return response.data;
});

export const updateMovie = createAsyncThunk(
  "movie/updateMovie",
  async (movie) => {
    const response = await axios.put(`${BASE_URL}/${movie._id}`, movie);
    console.log("Updated Data", response);
    return response.data;
  }
);

export const deleteMovie = createAsyncThunk(
  "movie/deleteMovie",
  async (movieId) => {
    const response = await axios.put(`${BASE_URL}/${movieId}`);
    console.log("Deleted Movie", response);
    return movieId;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.state = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    });
    builder.addCase(addMovie.fulfilled, (state, action) => {
      state.movies.push(action.payload);
    });
    builder.addCase(updateMovie.fulfilled, (state, action) => {
      state.movies = state.movies.map((mov) =>
        mov._id === action.payload._id ? action.payload : mov
      );
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      state.movies = state.movies.filter((mov) => mov._id !== action.payload);
    });
  },
});

export default movieSlice.reducer;
