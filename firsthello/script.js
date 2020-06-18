
function main() {
    let htmlElem = document.createElement('div');
    let text = document.createTextNode('Hello, World!');
    htmlElem.appendChild(text);
    document.body.append(htmlElem);
}

main();