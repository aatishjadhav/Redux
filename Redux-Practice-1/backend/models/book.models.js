const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  genre: String,
});

const Book = mongoose.model("books", BookSchema);

module.exports = Book;
