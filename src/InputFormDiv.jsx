import React from "react";

export class InputFormDiv extends React.Component {
  render() {
    return (
      <div className="input-form">
        <input
          value={this.props.value}
          type="text"
          id="#todo-input"
          placeholder="Enter Task"
          onChange={this.props.onChange}
        ></input>
        <button id="#addbtn" onClick={this.props.onClick}>
          Add Task
        </button>
      </div>
    );
  }
}
