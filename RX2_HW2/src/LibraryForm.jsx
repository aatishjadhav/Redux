import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, removeBook } from "./actions";

const LibraryForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addBook({title: title, author: author, isbn: isbn}));
  };
  return (
    <div>
      <h1>Library Management</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="ISBN"
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default LibraryForm;
