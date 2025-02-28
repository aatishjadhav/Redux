import { useSelector } from "react-redux";

const Tasks = () => {
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
                <li key={index}>{task.name}</li>
                <p>{task.status}</p>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
