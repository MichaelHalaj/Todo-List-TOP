import './style.css';
import { noteObj, todoObj, projectObj } from './projects';
import { removeAllChildren } from './functions';

const list = document.querySelector('.list');

const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const projects = document.getElementById('projects');

const todayProject = projectObj('Today');

function createCheckbox(){}
function createTodo(item, node) {
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
  if (node) {
    list.insertBefore(listItem, node);
  } else {
    list.appendChild(listItem);
  }
}
function displayTodo(projectItem) {
  projectItem.currentTodoList.forEach((item) => {
    console.table(item);
    createTodo(item);
  });
}
function displayAddTask() {
  const container = document.createElement('div');
  container.classList.add('add-container');
  const title = document.createElement('div');
  title.classList.add('add-title');
  const words = document.createElement('span');
  words.textContent = 'Add Task';
  title.addEventListener('click', (e) => {
    const proj = todoObj('lmao', 'jdlkasd', '01/01/23', 'high', true);
    todayProject.addTodo(proj);
    createTodo(proj, container);
    console.log(e);
  });
  title.appendChild(words);
  container.appendChild(title);
  list.appendChild(container);
}
today.addEventListener('click', () => {
  removeAllChildren(document.querySelector('.list'));
  displayTodo(todayProject);
  displayAddTask();
});
