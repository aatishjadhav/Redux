import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRemovedInventories } from "../actions";

const RemovedItems = () => {
  const dispatch = useDispatch();
  const removedItems = useSelector((state) => state.removedInventories);
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );

  useEffect(() => {
    dispatch(fetchRemovedInventories());
  }, [dispatch]);
  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        {removedItems.map((inv) => (
          <li key={inv._id}>
            {inv.itemName}: {inv.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Removed Items Total: {totalRemovedItems}</h2>
    </div>
  );
};

export default RemovedItems;
