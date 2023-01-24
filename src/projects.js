const noteObj = (title, description) => ({ title, description });


const todoObj = (title, description, dueDate, priority, complete) => ({
  title, description, dueDate, priority, complete,
});

const inputObj = (id, type, labelName) => ({
  id, type, labelName,
});

const projectObj = (name, todoList = [], notes = []) => {
  const currentTodoList = todoList;
  const currentNotesList = notes;
  const getName = () => name;
  const addTodo = (todoItem) => {
    currentTodoList.push(todoItem);
  };
  const addNotes = (noteItem) => {
    currentNotes.push(noteItem);
  };
  /*const filterByDate(){

  };*/
  return { currentTodoList, getName, addTodo };
};

const formCreator = (inputList) => {
  const getInputList = () => inputList;
  const createForm = () => document.createElement('form');
  const createSubmit = () => {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Add');
    return button;
  };
  const createLabel = (id, labelName) => {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelName;
    return label;
  };
  const createInput = (id, type) => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    return input;
  };
  const createRow = () => {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
  };
  const createRowInput = (id, type, labelName) => {
    const row = createRow();
    const label = createLabel(id, labelName);
    const input = createInput(id, type);
    row.appendChild(label);
    row.appendChild(input);
    return row;
  };
  const createInputField = (form, id, type, labelName) => {
    const rowInput = createRowInput(id, type, labelName);
    form.appendChild(rowInput);
  };
  const create = (container) => {
    const form = createForm();
    inputList.forEach((inputField) => {
      createInputField(form, inputField.id, inputField.type, inputField.labelName);
    });
    form.appendChild(createSubmit());
    container.appendChild(form);
  };
  return { getInputList, create };
};

export { noteObj, todoObj, inputObj, projectObj, formCreator };
