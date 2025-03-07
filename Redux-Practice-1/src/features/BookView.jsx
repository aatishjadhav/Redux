import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, fetchBooks } from "./bookSlice";
import { Link } from "react-router-dom";

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
      <ul className="list-group">
        {books.map((book) => (
          <li className="list-group-item" key={book._id}>
            BookName: {book.bookName} - Author: {book.author} - Genre:{" "}
            {book.genre}{" "}
            <button
              className="btn btn-danger float-end"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
            <Link
              to={`/edit-book/${book._id}`}
              state={{ book }}
              className="btn btn-warning float-end mx-3"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookView;
