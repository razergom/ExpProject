import React, { ChangeEventHandler } from "react";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
}

export class InputFormDiv extends React.Component<Props, {}> {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div className="input-form">
        <input
          value={value}
          type="text"
          id="#todo-input"
          placeholder="Enter Task"
          onChange={onChange}
        ></input>
        <button id="#addbtn" onClick={onClick}>
          Add Task
        </button>
      </div>
    );
  }
}
