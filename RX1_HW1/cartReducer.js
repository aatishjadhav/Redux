import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "./actions.js";

const initialState = {
  products: [
    { id: 1, name: "Product A", price: 10 },

    { id: 2, name: "Product B", price: 20 },

    { id: 3, name: "Product C", price: 15 },
  ],
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != action.payload),
      };

    case CALCULATE_TOTAL:
      return {
        ...state,
        totalAmount: state.cartItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
