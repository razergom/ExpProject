import { getInputFormDiv } from './inputForm.js';
import { getTaskListDiv } from './tasklist.js';
import { add } from 'lodash';

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Main Programm Section

function addTask() {
    const taskInputElem = document.getElementById('#todo-input');
    const textTask = taskInputElem.value;
    const taskList = document.getElementById('#tasks');

    const taskElement = document.createElement('li');
    taskElement.innerHTML = textTask;

    taskList.appendChild(taskElement);
    console.log(textTask);

    taskInputElem.value = '';
}

function taskInteractionSetup() {
    const taskListElem = document.getElementById('#tasks');
    taskListElem.addEventListener('click', (ev) => {
        console.log('clicked');
        if (ev.target.tagName === 'LI') {
            console.log('clicked on li');
            if (ev.target.getAttribute('style') === 'text-decoration: line-through') {
                ev.target.removeAttribute('style');
            } else {
                ev.target.setAttribute('style', 'text-decoration: line-through');
            }
        }
    });
}

function main() {
    const app = document.createElement('div');
    app.setAttribute('id', '#app');
    document.body.appendChild(app);

    const inputFormDiv = getInputFormDiv();
    const taskListDiv = getTaskListDiv();

    app.appendChild(inputFormDiv);
    app.appendChild(taskListDiv);

    const addbtn = document.getElementById('#addbtn');
    addbtn.onclick = addTask;

    taskInteractionSetup();
}

main();