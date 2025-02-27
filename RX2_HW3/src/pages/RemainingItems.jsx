import { useDispatch, useSelector } from "react-redux";

const RemainingItems = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => state.inventories);
  const totalInventories = inventories.reduce(
    (acc, curr) => curr.itemQuantity + acc,
    0
  );
  const removedItems = useSelector((state) => state.removedInventories);
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  const inventoryTotal = totalInventories - totalRemovedItems;
  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {inventoryTotal}</h2>
    </div>
  );
};

export default RemainingItems;
