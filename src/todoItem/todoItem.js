import React from "react";
import "./todoItem.css";
import { connect } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../redux/actions";
import classNames from "classnames";

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
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
          onDoubleClick={() => this.props.editTodo(this.props.id)}
        >
          {this.props.title}
        </div>

        <input
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
  editTodo: editTodo,
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
