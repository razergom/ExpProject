import React from "react";

export class InputFormDiv extends React.Component {
  render() {
    return (
      <div className="input-form">
        <input
          value={this.props.valtext}
          type="text"
          id="#todo-input"
          placeholder="Enter Task"
          onChange={this.props.onChangeHandler}
        ></input>
        <button id="#addbtn" onClick={this.props.clickHandler}>
          Add {this.props.itemType}
        </button>
      </div>
    );
  }
}
