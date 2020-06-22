import React from "react";

import { InputFormDiv } from "./inputform.jsx";
import { ItemListDiv } from "./tasklist.jsx";

export default class App extends React.Component {
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
    if (this.state.currentTask === "") {
      alert("Please enter task");
      return;
    }

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
    const { tasks, currentTask, taskStates } = this.state;

    return (
      <div id="#app">
        <InputFormDiv
          valtext={currentTask}
          onChangeHandler={this.changeState}
          clickHandler={this.addTask}
          itemType="Task"
        />
        <ItemListDiv
          items={tasks}
          itemStates={taskStates}
          clickHandler={this.editTaskState}
        />
      </div>
    );
  }
}
