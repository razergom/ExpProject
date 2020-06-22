import React from "react";

import { InputFormDiv } from "./InputFormDiv.jsx";
import { ItemListDiv } from "./ItemListDiv.jsx";

export default class App extends React.Component {
  state = {
    id: 0,
    currentTask: "",
    tasks: [],
  };

  addTask = () => {
    if (this.state.currentTask === "") {
      alert("Please enter task");
      return;
    }

    let newTask = {};
    newTask.task = this.state.currentTask;
    newTask.id = this.state.id;
    newTask.done = false;

    const newTasks = this.state.tasks;
    newTasks.push(newTask);

    console.log(newTasks);

    this.setState({
      tasks: newTasks,
      currentTask: "",
      id: this.state.id + 1,
    });

    console.log(this.state.tasks);
  };

  changeState = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  editTaskState = (event) => {
    const index = event.target.getAttribute("data-index");

    const newTasks = this.state.tasks;
    newTasks[index].done = !newTasks[index].done;

    this.setState({ taskStates: newTasks });
  };

  render() {
    const { tasks, currentTask } = this.state;

    return (
      <div id="#app">
        <InputFormDiv
          valtext={currentTask}
          onChangeHandler={this.changeState}
          clickHandler={this.addTask}
          itemType="Task"
        />
        <ItemListDiv items={tasks} clickHandler={this.editTaskState} />
      </div>
    );
  }
}
