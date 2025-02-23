import { createStore } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import cookieReducer from "./cookieReducer.js";

const store = createStore(cookieReducer);

store.subscribe(() => {
  console.log(store.getState());
  updateCookieCount();
});

// store.dispatch({ type: "cookies/added" });
// store.dispatch({ type: "cookies/removed" });

const addCookie = document.querySelector("#addCookie");
const removeCookie = document.querySelector("#removeCookie");
const cookieCount = document.querySelector("#cookieCount");

const addCookieHandler = () => {
  store.dispatch({ type: "cookies/added" });
};

const removeCookieHandler = () => {
  store.dispatch({ type: "cookies/removed" });
};

addCookie.addEventListener("click", addCookieHandler);
removeCookie.addEventListener("click", removeCookieHandler);

const updateCookieCount = () => {
  const state = store.getState();
  cookieCount.textContent = state.value;
};

updateCookieCount();
