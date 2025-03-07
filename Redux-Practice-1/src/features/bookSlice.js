import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:4000/books";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(BASE_URL);
  console.log(response);
  return response.data;
});

export const addBook = createAsyncThunk("book/addBook", async (book) => {
  const response = await axios.post(BASE_URL, book);
  console.log("Added Book", response);
  return response.data;
});

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    const response = await axios.delete(`${BASE_URL}/${bookId}`);
    return bookId;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "success";
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book._id !== action.payload);
    });
  },
});

export default bookSlice.reducer;
