import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer.js";

export const rootReducer = combineReducers({
  todos: todosReducer,
});
