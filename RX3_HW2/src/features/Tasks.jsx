import { useSelector, useDispatch } from "react-redux";
import { toggleStatusPressed } from "./taskSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasksByDate = useSelector((state) => state.tasksByDate);
  console.log(tasksByDate);

  return (
    <div>
      {tasksByDate.map((day, index) => (
        <div key={index}>
          <h2>{day.date}</h2>
          <ul>
            {day.tasks.map((task, index) => (
              <>
                <li key={index}>
                  {task.name}{" "}
                  <button onClick={() => dispatch(toggleStatusPressed(task.name))}>
                    {task.status === "Completed" ? "Completed" : "Pending"}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
