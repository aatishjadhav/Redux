const initialState = {
  inventories: [],
  removedInventories: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        inventories: action.payload,
      };
    case "FETCH_REMOVED_ITEMS_SUCCESS":
      return {
        ...state,
        removedInventories: action.payload,
      };
    case "ADD_INVENTORY":
      return {
        ...state,
        inventories: [...state.inventories, action.payload],
      };

      case "ADD_REMOVED_INVENTORY":
        return {
          ...state,
          removedInventories: [...state.inventories, action.payload],
        };

    default:
      return state;
  }
};

export default inventoryReducer;
