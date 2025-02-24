import { ADD_PROFILE, REMOVE_PROFILE, CALCULATE_AVERAGE_AGE } from "./actions.js";

const initialState = {
  profiles: [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ],
  profileItems: [],
  avgAge: 0,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profileItems: [...state.profileItems, action.payload],
      };
    case REMOVE_PROFILE:
      return {
        ...state,
        profileItems: state.profileItems.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case CALCULATE_AVERAGE_AGE:
      const total = state.profileItems.reduce((acc, curr) => acc + curr.age, 0);
      return {
        ...state,
        avgAge: total / state.profileItems.length,
      };
    default:
      return state;
  }
};

export default profileReducer;
