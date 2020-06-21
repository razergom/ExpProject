import React, { Component } from "react";

export class InputFormDiv extends React.Component {
    render() {
        return (
            <div className='input-form'>
                <input value={this.props.valtext} type="text" id='#todo-input' placeholder='Enter Task' onChange={this.props.onChangeHandler}></input>
                <button id='#addbtn' onClick={this.props.clickHandler}>Add {this.props.itemType}</button>
            </div>
        );
    }
}


// Without React Section
/*
export function getInputFormDiv() {
    const element = document.createElement('div');
    element.classList.add('input-form');

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('id', '#todo-input');
    inputField.setAttribute('placeholder', 'Enter task u want to do...');

    const addbtn = document.createElement('button');
    addbtn.setAttribute('id', '#addbtn');
    addbtn.innerHTML = 'Add Task';

    element.appendChild(inputField);
    element.appendChild(addbtn);
    return element;
}
*/