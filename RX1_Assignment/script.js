import { createStore } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import {
  addTask,
  removeTask,
  calculateTotalTasks,
  toggleTask,
} from "./actions.js";
import taskReducer from "./taskReducer.js";

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
  updateTasks();
});

const ShowTasksList = document.querySelector("#ShowTasksList");

const updateTasks = () => {
  const state = store.getState();
  ShowTasksList.innerHTML = state.tasks
    .map((task) => {
      return `<li><input type="checkbox" data-id="${
        task.id
      }" onChange="toggleStatus(event)" ${task.completed ? "checked" : ""}>${
        task.id
      }. ${task.title}: ${task.desc}: ${
        task.completed ? "Completed" : ""
      }</li>`;
    })
    .join("");
  let totalTasksElement = document.querySelector("#total");
  if (totalTasksElement) {
    totalTasksElement.innerHTML = `Total Tasks: ${state.totalTasks}`;
  }
};
updateTasks();

let taskIdCounter = 1;

const addTaskHandler = () => {
  let taskTitleInput = document.querySelector("#taskTitleInput").value;
  let taskDescInput = document.querySelector("#taskDescInput").value;
  store.dispatch(
    addTask({ id: taskIdCounter++, title: taskTitleInput, desc: taskDescInput })
  );
  store.dispatch(calculateTotalTasks());
  document.querySelector("#taskTitleInput").value = "";
  document.querySelector("#taskDescInput").value = "";
};

const removeTaskHandler = () => {
  const taskId = parseInt(document.querySelector("#removedTaskId").value);
  store.dispatch(removeTask(taskId));
  store.dispatch(calculateTotalTasks());
};

window.toggleStatus = (event) => {
  const taskId = parseInt(event.target.dataset.id);
  store.dispatch(toggleTask(taskId));
};

window.addTaskHandler = addTaskHandler;
window.removeTaskHandler = removeTaskHandler;
