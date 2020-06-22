import { InputFormDiv } from "./inputform.js";
import { ItemListDiv } from "./tasklist.js";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: "",
      tasks: [],
      taskStates: [],
    };

    this.changeState = this.changeState.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTaskState = this.editTaskState.bind(this);
  }

  addTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.currentTask],
      currentTask: "",
      taskStates: [...this.state.taskStates, false],
    });
  }

  changeState(ev) {
    this.setState({ currentTask: ev.target.value });
  }

  editTaskState(ev) {
    const index = ev.target.getAttribute("data-index");
    const newTaskStates = this.state.taskStates;
    newTaskStates[index] = !newTaskStates[index];
    this.setState({ taskStates: newTaskStates });
  }

  render() {
    return (
      <div id="#app">
        <InputFormDiv
          valtext={this.state.currentTask}
          onChangeHandler={this.changeState}
          clickHandler={this.addTask}
          itemType="Task"
        />
        <ItemListDiv
          items={this.state.tasks}
          itemStates={this.state.taskStates}
          clickHandler={this.editTaskState}
        />
      </div>
    );
  }
}

function main() {
  ReactDOM.render(<App />, document.body);
}

main();
