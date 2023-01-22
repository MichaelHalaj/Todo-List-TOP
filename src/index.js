import './style.css';
import { noteObj, todoObj, projectObj } from './projects';
import { removeAllChildren } from './functions';

const list = document.querySelector('.list');

const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const projects = document.getElementById('projects');

const todoItem = todoObj('Wake Up', 'jdlkasd', '01/01/23', 'high', true);
const todoItem2 = todoObj('Sleep', 'cnskjdcsnd', '01/01/23', 'high', true);

const todayProject = projectObj('Today');
todayProject.addTodo(todoItem);
todayProject.addTodo(todoItem2);
for (let i = 0; i < 20; i++) {
  const proj = todoObj(i, 'jdlkasd', '01/01/23', 'high', true);
  todayProject.addTodo(proj);
}
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
function displayAddTask() {
  const container = document.createElement('div');
  container.classList.add('add-container');
  const title = document.createElement('div');
  title.classList.add('add-title');
  const words = document.createElement('span');
  words.textContent = 'Add Task';
  title.appendChild(words);
  container.appendChild(title);
  list.appendChild(container);
}
today.addEventListener('click', () => {
  removeAllChildren(document.querySelector('.list'));
  displayTodo(todayProject);
  displayAddTask();
});
