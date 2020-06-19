import { getInputFormDiv } from './inputForm.js';
import { getTaskListDiv } from './tasklist.js';
import { add } from 'lodash';

function addTask() {
    const textTask = document.getElementById('#todo-input').value;
    const taskList = document.getElementById('#tasks');
    console.log(textTask);
}

function main() {
    const app = document.createElement('div');
    app.setAttribute('id', '#app');
    document.body.appendChild(app);

    const inputFormDiv = getInputFormDiv();
    const taskListDiv = getTaskListDiv();

    document.body.appendChild(inputFormDiv);
    document.body.appendChild(taskListDiv);

    const addbtn = document.getElementById('#addbtn');
    addbtn.onclick = addTask;
}

main();