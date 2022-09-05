import React from "react";
import "./main.css";
import TodoItem from "../todoItem/todoItem";
import "../todoItem/todoItem";
import { connect } from "react-redux";
import { removeTodo } from "../redux/actions";


export class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const filteredTodoList = this.props.todoList.filter((todo) => {
      if (this.props.router.location.pathname === "/completed") {
        return todo.isCompleted === true;
      }
      if (this.props.router.location.pathname === "/active") {
        return todo.isCompleted === false;
      }
      return todo;
    });

    return this.props.todoList.length > 0 ? (
      <main className="main">
        {filteredTodoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              id={todo.id}
              isEditing={todo.isEditing}
            />
          );
        })}
      </main>
    ) : null;
  }
}

const mapDispatchToProps = {
  removeTodo: removeTodo,
};

const mapStateToProps = (state) => {
  const todoList = state.todos.todoList;
  return { todoList };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
