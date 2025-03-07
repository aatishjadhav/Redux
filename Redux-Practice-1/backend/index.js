

require("dotenv").config();
const Book = require("./models/book.models");
const {initializeDb} = require("./db/db.connect");
initializeDb();

const cors = require('cors');
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/books", async (req, res) => {
  try {
    const getAllBooks = await Book.find();
    if (getAllBooks) {
      res.status(200).json(getAllBooks);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { bookName, author, genre } = req.body;
    const addNew = new Book({ bookName, author, genre });
    await addNew.save();
    res.status(201).json(addNew);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", error });
  }
});

app.put("/books/:bookId", async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const dataToUpdate = req.body;
    const updatedData = await Book.findByIdAndUpdate(bookId, dataToUpdate, {
      new: true,
    });
    if (updatedData) {
      res
        .status(200)
        .json({ message: "Book updated successfully", book: updatedData });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/books/:bookId", async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const deletedbook = await Book.findByIdAndDelete(bookId);
    if (deletedbook) {
      res
        .status(200)
        .json({ message: "Book deleted successfully", book: deletedbook });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
