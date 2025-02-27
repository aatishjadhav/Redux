export const addInventory = (inventory) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventory),
      }
    );
    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: "ADD_INVENTORY", payload: data });
    }
  } catch (error) {
    console.error("Failed to add inventory", error);
  }
};

export const fetchInventories = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/storage-items"
    );
    const data = await response.json();
    if (data) {
      console.log(data);
      dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: data });
    }
  } catch (error) {
    console.error("Failed to fetch inventory", error);
  }
};

export const fetchRemovedInventories = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store"
    );
    const data = await response.json();
    if (data) {
      console.log(data);
      dispatch({ type: "FETCH_REMOVED_ITEMS_SUCCESS", payload: data });
    }
  } catch (error) {
    console.error("Failed to fetch removed inventory", error);
  }
};


export const addRemovedInventory = (inventory) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventory),
      }
    );
    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: "ADD_REMOVED_INVENTORY", payload: data });
    }
  } catch (error) {
    console.error("Failed to add removed inventory", error);
  }
};