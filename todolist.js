/*
Todolist functionality:

- welcome message
- showing a list of completed / incomplete todos
- adding a todo
- deleting a todo
- marking a todo as completed
- statistics on completed / incomplete todos
- deleting all completed todos
*/

let prompt = require("prompt-sync")();

let todos = [
  { name: "learn git", completed: false },
  { name: "learn HTML", completed: true },
  { name: "go shopping", completed: false },
];

function main() {
  console.clear();
  console.log("Welcome to the todo list app.");

  let command = "";
  while (command !== "q") {
    //displayTodos();
    console.log(
      "What do you want to do?\n" +
        "[a] add a todo\n" +
        "[d] delete a todo\n" +
        "[c] mark a todo as completed\n" +
        "[q] quit"
    );
    command = prompt();
    if (command === "a") {
      addTodo();
    } else if (command === "d") {
      deleteTodo();
    } else if (command === "c") {
      setTodoCompleted();
    }
  }
}

function setTodoCompleted() {
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    console.log(`what task do you want to mark as true ${todo.name} ${i}`);
  }

  let answer = prompt();

  todos[answer].completed = true;
}

main();
