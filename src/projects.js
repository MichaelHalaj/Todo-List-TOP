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
  const createInputField = (form, id, type, labelName) => {
    const label = createLabel(id, labelName);
    const input = createInput(id, type);
    form.appendChild(label);
    form.appendChild(input);
  };
  const create = (container) => {
    const form = createForm();
    inputList.forEach((inputField) => {
      createInputField(form, inputField.id, inputField.type, inputField.labelName);
    });
    container.appendChild(form);
  };
  return { getInputList, create };
};

export { noteObj, todoObj, inputObj, projectObj, formCreator };
