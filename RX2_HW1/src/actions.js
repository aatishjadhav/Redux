
export const addIncome = (amount) => {
  return {
    type: "ADD_INCOME",
    payload: amount,
  };
};

export const addExpense = (amount) => {
  return {
    type: "ADD_EXPENSE",
    payload: amount,
  };
};
