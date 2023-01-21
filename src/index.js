import './style.css';
import { noteObj, todoObj, projectObj } from './projects';
import { removeAllChildren } from './functions';

const list = document.querySelector('.list');

const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const projects = document.getElementById('projects');

const todoItem = todoObj('Wake Up', 'Shake ass', '01/01/23', 'high', true);
const todoItem2 = todoObj('Sleep', 'Shake ass', '01/01/23', 'high', true);

const todayProject = projectObj('Today');
todayProject.addTodo(todoItem);
todayProject.addTodo(todoItem2);

function createCheckbox(){}

function displayTodo(projectItem) {
  projectItem.currentTodoList.forEach((item) => {
    console.table(item);
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    const listItemName = document.createElement('div');
    listItemName.classList.add('list-item-name');
    listItemName.textContent = item.title;
    const container = document.createElement('div');
    container.classList.add('check-container');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');
    container.appendChild(checkbox);
    container.appendChild(checkmark);
    listItem.appendChild(container);
    listItem.appendChild(listItemName);
    list.appendChild(listItem);
    list.appendChild(listItem);
  });
}
today.addEventListener('click', () => {
  removeAllChildren(document.querySelector('.list'));
  displayTodo(todayProject);
});
