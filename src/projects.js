const noteObj = (title, description) => ({ title, description });


const todoObj = (title, description, dueDate, priority, complete) => ({
  title, description, dueDate, priority, complete,
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

export { noteObj, todoObj, projectObj };
