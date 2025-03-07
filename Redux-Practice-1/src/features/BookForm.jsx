import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "./bookSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    genre: "",
  });

  const bookToEdit = location.state?.book || null;
  console.log(bookToEdit);

  useEffect(() => {
    if (bookToEdit) {
      setFormData(bookToEdit);
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      dispatch(updateBook({ id: bookToEdit._id, ...formData }));
      navigate("/");
    } else {
      dispatch(addBook(formData));
      setFormData({ bookName: "", author: "", genre: "" });
      navigate("/");
    }
  };
  return (
    <div>
      <h1> {bookToEdit ? "Update Book" : "Add Book"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          value={formData.bookName}
          placeholder="Enter Book Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          placeholder="Enter Book Author"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          placeholder="Enter Book Genre"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          {bookToEdit ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
