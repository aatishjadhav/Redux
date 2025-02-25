import "./App.css";
import {useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch();
  
  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <>
      <div>
        <div>Counter: {counter}</div>
        <button onClick={(event) => handleClick("add")}>Add</button>
        <button onClick={(event) => handleClick("minus")}>Minus</button>
      </div>
    </>
  );
}

export default App;
