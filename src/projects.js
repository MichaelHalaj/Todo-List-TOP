const noteItem = (title, description) => ({ title, description });


const todoObj = (title, description, dueDate, priority, complete) => ({
  title, description, dueDate, priority, complete,
});

const projectObj = (name, todoList = [], notes = []) => {
  const currentTodo = todoList;
  const currentNotes = notes;
  const getName = () => name;
  const addTodo = (todoItem) => {
    currentTodo.push(todoItem);
  };
  const addNotes = (noteItem) => {
    currentNotes.push(noteItem);
  }
};

export { todoObj, projectObj };
