import React from "react";
import { connect } from "react-redux";
import FilterButton from "../filterButton/filterButton";
import { clearCompletedTodo } from "../redux/actions";
import "./footer.css";
import { Route, browserHistory, Routes } from "react-router";

export class Footer extends React.Component {
  render() {
    const notCompletedLength = this.props.notCompletedTodos.length;
    if (this.props.todosLength > 0) {
      return (
        <footer className="footer">
          <div className="footer-count">
            {`${notCompletedLength} item`}
            {notCompletedLength === 1 ? " left" : "s left"}
          </div>

          <div className="footer__filters">
            <FilterButton name="All" path="/" router={this.props.router} />
            <FilterButton
              name="Active"
              path="/active"
              router={this.props.router}
            />
            <FilterButton
              name="Completed"
              path="/completed"
              router={this.props.router}
            />
          </div>
          {this.props.todoListHasCompleted === true ? (
            <button
              onClick={() => this.props.clearCompletedTodo()}
              className="footer__clear-completed"
            >
              Clear completed
            </button>
          ) : null}
        </footer>
      );
    }
  }
}

const mapDispatchToProps = {
  clearCompletedTodo: clearCompletedTodo,
};

const mapStateToProps = (state) => {
  const todosLength = state.todos.todoList.length;
  const todoListHasCompleted = state.todos.todoList.some((todo) => {
    return todo.isCompleted === true;
  });

  const notCompletedTodos = state.todos.todoList.filter((todo) => {
    return todo.isCompleted === false;
  });

  return { notCompletedTodos, todosLength, todoListHasCompleted };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
