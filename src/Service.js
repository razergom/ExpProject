import { v4 as uuidv4 } from "uuid";

export default class Service {
  createTask = (task) => {
    const newTask = {};
    newTask.task = task;
    newTask.id = uuidv4();
    newTask.done = false;

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
  };
}
