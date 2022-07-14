function addList() {
    var input = document.getElementById('input');
    var list = document.createElement('li');
    list.setAttribute("class", "list-group-item");
    list.append(input.value);

    var spanElement = document.createElement('span');
    spanElement.setAttribute('class', 'del');
    spanElement.append('X');
    spanElement.setAttribute('onclick', 'removeMe(this)');
    list.append(spanElement);

    var ul = document.getElementById('ul-list');
    ul.append(list);
}

function removeMe(e) {
    e.parentNode.remove();
}

