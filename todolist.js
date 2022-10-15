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
    displayTodos();
    console.log(
      "What do you want to do?\n" +
        "[a] add a todo\n" +
        "[d] delete a todo\n" +
        "[c] mark a todo as completed\n" +
        "[s] show statistics\n" +
        "[q] quit"
    );
    command = prompt();
    if (command === "a") {
      addTodo();
    } else if (command === "d") {
      deleteTodo();
    } else if (command === "c") {
      setTodoCompleted();
    } else if (command === "s") {
      showStatistics();
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


function showStatistics(){

  let completedItems = 0;
  let incompleteItems = 0;
  let percent = 0;

  for(const items of todos){
    
      if(!items.completed){
        incompleteItems++; 
        // console.log(`${items.name} is incomlete!`);
      }
      else  if(items.completed){
        completedItems++;
        //  console.log(`${items.name} is comleted!`);
      }
      percent = 100 / (completedItems + incompleteItems) * completedItems;
  }
  console.log(`${completedItems} tasks are comleted! and ${incompleteItems} tasks are incompelete! ${percent} of tasks are completed.`);

  
}

function deleteTodo() {
    let todoToDelete = prompt('What todo would you like to delete?');
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].name === todoToDelete) {
            todos.splice(i,1);
            break;

        }
    }
}

function addTodo () {
  let newTodoName = prompt("Please write what you want to add.");
  let newToDoObject = {name: newTodoName, completed: false};
  todos.push(newToDoObject);
}

function displayTodos() {
    for (const todo of todos) {
        if (todo.completed) {
            console.log(`[x] ${todo.name}`);
        } else {
            console.log(`[ ] ${todo.name}`);
        }
    }
}


main();
