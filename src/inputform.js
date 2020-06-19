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