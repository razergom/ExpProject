export function getTaskListDiv() {
    const element = document.createElement('div');
    element.classList.add('task-list');

    const ulElement = document.createElement('ul');
    ulElement.setAttribute('id', '#tasks');

    element.appendChild(ulElement);
    return element;
}