import React from "react";
import "./todoItem.css";
import { connect } from "react-redux";
import {
  removeTodo,
  startEditTodo,
  submitEditTodo,
  toggleTodo,
} from "../redux/actions";
import classNames from "classnames";

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.submitEditTodoHandler = this.submitEditTodoHandler.bind(this);
  }
  submitEditTodoHandler(event) {
    const editProps = {
      title: event.target.value,
      id: this.props.id,
    };

    if (event.code === "Enter") {
      console.log(editProps.id, editProps.title);
      return this.props.submitEditTodo(editProps);
    }
  }

  render() {
    return (
      <div className="todo-item">
        <label
          className={classNames("todo-item__toggler", {
            "todo-item__toggler_hidden": this.props.isEditing,
          })}
        >
          <input
            checked={this.props.isCompleted}
            type="checkbox"
            className={classNames("todo-item__checkbox", {
              "todo-item__checkbox_hidden": this.props.isEditing,
            })}
            id="todo-item__checkbox"
            onChange={() => this.props.toggleTodo(this.props.id)}
          />
        </label>

        <div
          className={classNames("todo-item__title", {
            "todo-item__title_hidden": this.props.isEditing,
            "todo-item__title__checked": this.props.isCompleted,
          })}
          onDoubleClick={() => this.props.startEditTodo(this.props.id)}
        >
          {this.props.title}
        </div>

        <input
          onKeyDown={(event) => this.submitEditTodoHandler(event)}
          defaultValue={this.props.title}
          type="text"
          className={classNames("todo-item__edit", {
            "todo-item__edit_show": this.props.isEditing,
          })}
        />

        <button
          className={classNames("todo-item__remove-button", {
            "todo-item__remove-button_hidden": this.props.isEditing,
          })}
          onClick={() => this.props.removeTodo(this.props.id)}
        >
          +
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  removeTodo: removeTodo,
  toggleTodo: toggleTodo,
  startEditTodo: startEditTodo,
  submitEditTodo: submitEditTodo,
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
