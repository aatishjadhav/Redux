import {useSelector} from 'react-redux'

const FinanceSummary = () => {
    const income = useSelector((state) => state.income)
    const expenses = useSelector((state) => state.expenses)
  return (
    <div>
      <h1>Finance Summary</h1>
          <p>Income: $ {income}</p>
          <p>Expense: $ {expenses}</p>
          <p>Balance: $ {income- expenses}</p>
    </div>
  );
};

export default FinanceSummary;
