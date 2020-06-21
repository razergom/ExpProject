//import { getInputFormDiv } from './inputForm.js';
//import { getTaskListDiv } from './tasklist.js';
//import { add } from 'lodash';

import { InputFormDiv } from './inputform.js';
import { ItemListDiv } from './tasklist.js';

import React, { Component } from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: '',
            tasks: []
        }

        this.changeState = this.changeState.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        console.log('clicked');
        this.setState({tasks: [...this.state.tasks, this.state.currentTask], currentTask: ''});
        console.log(this.state.tasks);
    }

    changeState(ev) {
        this.setState({currentTask: ev.target.value})
    }




    render() {
        return (
            <div id='#app'>
                <InputFormDiv valtext={this.state.currentTask} onChangeHandler={this.changeState} clickHandler={this.addTask} itemType='Task'/>
                <ItemListDiv items={this.state.tasks} />
            </div>
        );
    }
}



function main() {
    ReactDOM.render(<App />, document.body);
}

main();





// Without React Section
/*
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
*/