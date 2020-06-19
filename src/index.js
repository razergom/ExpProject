import _ from 'lodash';
import print from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Modern World'], ' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = print;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());