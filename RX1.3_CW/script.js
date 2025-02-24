import { createStore } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import todosReducer from "./todosReducer.js";
import { addTodo, removeTodo } from "./actions.js";

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
  updateTodoList();
});

const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const addTodoHandler = () => {
  const todoValue = todoInput.value;
  if (todoInput) {
    store.dispatch(addTodo(todoValue));
  }
};

window.removeTodoHandler = (index) => {
  store.dispatch(removeTodo(index));
};

addBtn.addEventListener("click", addTodoHandler);

const updateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo} <button onClick="removeTodoHandler(${index})">Remove</button></li>`;
    })
    .join("");
};

updateTodoList();
