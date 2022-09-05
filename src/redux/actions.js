import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  TOGGLE_TODO,
} from "./types";

export const addNewTodo = (todoProperties) => {
  return {
    type: ADD_TODO,
    payload: todoProperties,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const toggleAllTodo = () => {
  return {
    type: TOGGLE_ALL_TODO,
  };
};

export const clearCompletedTodo = () => {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
};
export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};