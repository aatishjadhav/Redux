import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses, fetchIncome } from "../actions";
import { useEffect } from "react";
const Savings = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0);
  const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0);

  const totalSavings = totalIncome - totalExpenses;

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);
  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);
  return (
    <div>
      <h1>Savings Page</h1>

      <h2>Savings Total: $ {totalSavings}</h2>
    </div>
  );
};

export default Savings;
