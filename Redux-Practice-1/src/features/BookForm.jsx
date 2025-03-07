import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    genre: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({ bookName: "", author: "", genre: "" });
    navigate("/");
  };
  return (
    <div>
      <h1>Add Book</h1>
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
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
