import { useSelector } from "react-redux";
import { removeBook } from "./actions";
import { useDispatch } from "react-redux";

const LibrarySummary = () => {
  const dispatch = useDispatch();
  const totalbooks = useSelector((state) => state.totalBooks);
  const books = useSelector((state) => state.books);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>Library Summary</h2>
      <p>Total Books: {totalbooks}</p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.id}. {book.title} by {book.author} (ISBN: {book.isbn})
            <button onClick={() => handleRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibrarySummary;
