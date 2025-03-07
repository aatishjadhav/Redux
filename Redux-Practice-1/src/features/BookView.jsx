import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, fetchBooks } from "./bookSlice";

const BookView = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);
  console.log("from student view comp", books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
    dispatch(fetchBooks);
  };

  return (
    <div className="conteniner">
      <h1>Book List</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            BookName: {book.bookName} - Author: {book.author} - Genre:{" "}
            {book.genre}{" "}
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookView;
