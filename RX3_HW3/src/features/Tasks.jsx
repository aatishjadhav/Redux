import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, toggleStatusPressed } from "./taskSlice";
import { useEffect } from "react";

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, status, error } = useSelector((state) => state);
  console.log(tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tasks.map((day, index) => (
        <div key={index}>
          <h2>{day.date}</h2>
          <ul>
            {day.tasks.map((task) => (
              <>
                <li key={task.taskId}>
                  {task.task}{" "}
                  <button
                    onClick={() => dispatch(toggleStatusPressed(task.taskId))}
                  >
                    {task.taskStatus === "Completed" ? "Completed" : "Pending"}
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
