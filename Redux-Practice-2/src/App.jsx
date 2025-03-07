import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MovieView from "./features/MovieView";
import MovieForm from "./features/MovieForm";

function App() {
  return (
    <main className="container py-3">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieView />} />
        <Route path="/add-movie" element={<MovieForm />} />
      </Routes>
    </main>
  );
}

export default App;
