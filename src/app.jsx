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

    this.setState((prevState) => ({
      tasks: newTasks,
      currentTask: "",
      id: prevState.id + 1,
    }));
  };

  updateCurrentTask = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  editTaskState = (id) => {
    const newTasks = this.state.tasks;

    let index = 0;

    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].id === id) {
        index = i;
        break;
      }
    }

    newTasks[index].done = !newTasks[index].done;

    this.setState({ taskStates: newTasks });
    console.log(this.state.tasks);
  };

  render() {
    const { tasks, currentTask } = this.state;

    return (
      <div>
        <InputFormDiv
          value={currentTask}
          onChange={this.updateCurrentTask}
          onClick={this.addTask}
        />
        <ItemListDiv items={tasks} onClick={this.editTaskState} />
      </div>
    );
  }
}
