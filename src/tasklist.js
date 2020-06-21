import React, { Component } from "react";

export class ItemListDiv extends React.Component {
    render() {
        return (
            <div className='item-list'>
                <ul>
                    {
                        this.props.items.map((item, index) => {
                            if (!this.props.itemStates[index]) {
                                return (<li onClick={this.props.clickHandler} data-index={index} key={index}>{item}</li>);
                            } else {
                                return (<li style={{textDecoration: 'line-through'}} data-index={index} onClick={this.props.clickHandler} key={index}>{item}</li>);
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}


// Without React Section
/*
export function getTaskListDiv() {
    const element = document.createElement('div');
    element.classList.add('task-list');

    const ulElement = document.createElement('ul');
    ulElement.setAttribute('id', '#tasks');

    element.appendChild(ulElement);
    return element;
}
*/