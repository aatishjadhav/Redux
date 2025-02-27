import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import RemovedItems from "./pages/RemovedItems";
import RemainingItems from "./pages/RemainingItems";
import InventoryAddForm from "./pages/InventoryAddForm";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/removed-items">Removed Items</Link>
              </li>
              <li>
                <Link to="/remaining-items">Remaining Items</Link>
              </li>
              <li>
                <Link to="/">Add New Items</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/removed-items" element={<RemovedItems />} />
            <Route path="/remaining-items" element={<RemainingItems />} />
            <Route path="/" element={<InventoryAddForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
