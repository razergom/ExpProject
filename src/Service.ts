import { v4 as uuidv4 } from "uuid";

import Task from "./Task";

export default class Service {
  createTask(task: string): Promise<Task> {
    let newTask: Task = {
      task: task,
      id: uuidv4(),
      done: false,
    };

    return new Promise((resolve, reject) => {
      const timeout = Math.random() * 5000;
      setTimeout(() => {
        const randomVal = Math.random();
        if (randomVal < 0.35) {
          reject(
            "Something goes wrong while creating task (" + newTask.task + ") :("
          );
        }
        resolve(newTask);
      }, timeout);
    });
  }
}
