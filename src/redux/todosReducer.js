import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  TOGGLE_ALL_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  START_EDIT_TODO,
  SUBMIT_EDIT_TODO,
} from "./types";

const initialState = {
  todoList: [
    {
      title: "content",
      isCompleted: false,
      id: performance.now() + Math.random() * 1000,
      isEditing: false,
    },
    {
      title: "math",
      isCompleted: true,
      id: performance.now() + Math.random() * 1000,
      isEditing: true,
    },
  ],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todoList: [...state.todoList, action.payload],
      };
    }

    case REMOVE_TODO: {
      const filteredTodos = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todoList: filteredTodos,
      };
    }

    case TOGGLE_TODO: {
      const changedTodo = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else return todo;
      });
      return {
        ...state,
        todoList: changedTodo,
      };
    }

    case TOGGLE_ALL_TODO: {
      const isAllCompleted = state.todoList.every((todo) => {
        return todo.isCompleted === true;
      });
      const newTodoList = state.todoList.map((todo) => {
        return {
          ...todo,
          isCompleted: !isAllCompleted,
        };
      });
      return {
        ...state,
        todoList: newTodoList,
      };
    }

    case CLEAR_COMPLETED_TODO: {
      const clearedTodos = state.todoList.filter((todo) => {
        return todo.isCompleted === false;
      });
      return {
        ...state,
        todoList: clearedTodos,
      };
    }

    case START_EDIT_TODO: {
      const newTodoList = state.todoList.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          isEditing: !todo.isEditing,
        };
      });

      return {
        ...state,
        todoList: newTodoList,
      };
    }

    case SUBMIT_EDIT_TODO: {
      const newTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isEditing: false,
            title: action.payload.title,
          };
        }
        return todo;
      });

      return {
        ...state,
        todoList: newTodoList,
      };
    }

    default:
      return state;
  }
};
