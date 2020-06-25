import * as React from "react";

interface Props {
  value: string;
  onChange(event: any): any;
  onClick(): any;
}

export class InputFormDiv extends React.Component<Props, {}> {
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
