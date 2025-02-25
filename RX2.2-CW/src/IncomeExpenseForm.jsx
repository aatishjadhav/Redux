import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "./actions";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };

  const handleAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default IncomeExpenseForm;
