import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInventory,
  addRemovedInventory,
  fetchInventories,
} from "../actions";

const InventoryAddForm = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => state.inventories);
  console.log("Current inventories:", inventories);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [entryType, setEntryType] = useState("");

  useEffect(() => {
    dispatch(fetchInventories());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (entryType === "Add To Storage") {
      dispatch(
        addInventory({
          itemName: name,
          itemQuantity: parseFloat(quantity),
          entryType: entryType,
        })
      );
    } else {
      dispatch(
        addRemovedInventory({
          itemName: name,
          itemQuantity: quantity,
          entryType: entryType,
        })
      );
    }
    setName("");
    setQuantity(0);
  };
  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form action="" onSubmit={handleAdd}>
        <div>
          <label htmlFor="">Item Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
        </div>
        <div>
          <label htmlFor="">Item Quantity:</label>
          <br />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br /> <br />
        </div>
        <div>
          <label htmlFor="">Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="Add To Storage">Add To Storage</option>
            <option value="Remove From Storage">Remove From Storage</option>
          </select>
          <br /> <br />
        </div>
        <button>Add Item Data</button>
      </form>
    </div>
  );
};

export default InventoryAddForm;
