import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./loggerMiddleware";

import financeReducer from "./financeReducer";

const store = createStore(financeReducer, applyMiddleware(loggerMiddleware));
export default store;
