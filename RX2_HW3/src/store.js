import { createStore, applyMiddleware } from "redux";

import inventoryReducer from "./reducers";

import { thunk } from "redux-thunk";

const store = createStore(inventoryReducer, applyMiddleware(thunk));

export default store;
