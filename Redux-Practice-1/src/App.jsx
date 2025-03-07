import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BookView from "./features/BookView";
import BookForm from "./features/BookForm";

function App() {
  return (
    <main className="container py-3">
      <Navbar/>
      <Routes>
        <Route path="/" element={<BookView />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/edit-book/:bookId" element={<BookForm/>} />
      </Routes>
    </main>
  );
}

export default App;
