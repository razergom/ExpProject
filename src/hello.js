export function getHelloDiv() {
    const element = document.createElement('div');
    const elemText = document.createTextNode('Hello, World');

    element.appendChild(elemText);
    return element;
}