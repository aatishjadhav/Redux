import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInventories } from "../actions";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => state.inventories);
  const totalInventories = inventories.reduce(
    (acc, curr) => curr.itemQuantity + acc,
    0
  );
  useEffect(() => {
    dispatch(fetchInventories());
  }, [dispatch]);
  console.log("Inventories from Redux:", inventories);
  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {inventories.map((inv) => (
          <li key={inv._id}>
            {inv.itemName}: {inv.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Inventory Items: {totalInventories}</h2>
    </div>
  );
};

export default Inventory;
