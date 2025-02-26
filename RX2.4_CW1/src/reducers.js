const initialState = {
  income: [],
  expenses: [],
  savings: [],
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INCOME_SUCCESS":
      return {
        ...state,
        income: action.payload,
      };
    case "FETCH_EXPENSES_SUCCESS":
      return {
        ...state,
        expenses: action.payload,
      };
    case "FETCH_SAVINGS_SUCCESS":
      return {
        ...state,
        savings: action.payload,
      };
    case "ADD_ENTRY_SUCCESS":
      if (action.payload.entryType === "income") {
        return {
          ...state,
          income: [...state.income, action.payload],
        };
      } else {
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      }
    default:
      return state;
  }
};

export default financeReducer;
