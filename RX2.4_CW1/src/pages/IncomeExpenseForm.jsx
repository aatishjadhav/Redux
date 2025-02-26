import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry, addExpenses } from "../actions";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [entryType, setEntryType] = useState("income");

  const handleAddEntry = (e) => {
    e.preventDefault();
    console.log(entryType);
    if (entryType === "income") {
      dispatch(
        addEntry({ description, amount: parseFloat(amount), entryType })
      );
    } else {
      dispatch(addExpenses({ description, amount: parseFloat(amount), entryType }));
    }
    setDescription("");
    setAmount("");
    setEntryType("income");
  };
  return (
    <div>
      <h1>New Entry Page</h1>
      <form action="">
        <div>
          <label htmlFor="">Description:</label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Amount:</label>
          <br />
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Entry Type:</label>
          <br />
          <select
            name=""
            id=""
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>{" "}
        <br />
        <button onClick={handleAddEntry}>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
