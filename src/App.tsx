import React from "react";

import { InputFormDiv } from "./InputFormDiv";
import { ItemListDiv } from "./ItemListDiv";

import Service from "./Service";
import Task from "./Task";

interface Props {
  service: Service;
}

interface State {
  currentTask: string;
  tasks: Array<Task>;
}

export default class App extends React.Component<Props, State> {
  state = {
    currentTask: "",
    tasks: [],
  };

  addTask = () => {
    if (this.state.currentTask === "") {
      alert("Please enter task");
      return;
    }

    this.setState({
      currentTask: "",
    });

    this.props.service
      .createTask(this.state.currentTask)
      .then((newTask) => {
        const newTasks: Array<Task> = this.state.tasks;
        newTasks.push(newTask);

        this.setState((prevState) => ({
          tasks: newTasks,
        }));
      })
      .catch(alert);
  };

  updateCurrentTask = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  editTaskState = (id) => {
    const newTasks: Array<Task> = [...this.state.tasks];
    const index = newTasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      newTasks[index].done = !newTasks[index].done;
      this.setState({ tasks: newTasks });
    }
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
