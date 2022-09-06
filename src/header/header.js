import React from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleAllTodo } from "../redux/actions";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.addNewTodoHandler = this.addNewTodoHandler.bind(this);
  }

  addNewTodoHandler(event) {
    const todoProperties = {
      title: event.target.value,
      isEditing: false,
      isCompleted: false,
      id: performance.now(),
    };

    if (event.code !== "Enter" || event.target.value === "") return;

    this.props.addNewTodo(todoProperties);
    event.target.value = "";
  }
  render() {
    const todoListLength = this.props.state.todos.todoList.length;

    return (
      <header className="header">
        {todoListLength > 0 ? (
          <button
            type="checkbox"
            className={`header__toggle-all-btn${
              this.props.todoListCheck === true ? "__active" : ""
            }`}
            onClick={() => this.props.toggleAllTodo()}
          />
        ) : null}
        <input
          type="text"
          onKeyDown={this.addNewTodoHandler}
          className="input"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

const mapDispatchToProps = {
  addNewTodo: addNewTodo,
  toggleAllTodo: toggleAllTodo,
};

const mapStateToProps = (state) => {
  const todoListCheck = state.todos.todoList.every((todo) => {
    return todo.isCompleted === true;
  });
  return { state, todoListCheck };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
