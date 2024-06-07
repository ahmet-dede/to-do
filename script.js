// Variables

let input = document.getElementById("input");
let button = document.getElementById("addBtn");
let todoList = document.getElementById("todo-list");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Functions

todos.forEach((todo) => {
  addTask(todo);
});

function addTask(todo) {
  let li = document.createElement("li");

  let todoTextSpan = document.createElement("span");
  todoTextSpan.innerText = todo;
  li.appendChild(todoTextSpan);

  let editSpan = document.createElement("SPAN");
  let editButton = document.createElement("i");
  editButton.className = "fa fa-edit";
  editSpan.className = "edit";
  editSpan.appendChild(editButton);
  li.appendChild(editSpan);

  let deleteSpan = document.createElement("SPAN");
  let deleteButton = document.createTextNode("\u00D7");
  deleteSpan.className = "delete";
  deleteSpan.appendChild(deleteButton);
  li.appendChild(deleteSpan);

  todoList.appendChild(li);

  let listItems = Array.from(todoList.getElementsByTagName("li"));
  for (let i = 0; i < listItems.length; i++) {
    let todoTextSpan = listItems[i].getElementsByTagName("span")[0];
  }

  // Event Listeners

  button.addEventListener("click", () => {
    if (input.value === "") {
      alert("You must write something!");
    } else {
      let todo = input.value;
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      addTask(todo);
      input.value = "";
    }
  });

  editSpan.addEventListener("click", () => {
    let newValue = prompt("Edit your todo", todoTextSpan.innerText);
    if (newValue) {
      let index = todos.indexOf(todo);
      if (index > -1) {
        todos[index] = newValue;
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      todoTextSpan.innerText = newValue;
    }
  });

  deleteSpan.addEventListener("click", () => {
    let index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    li.remove();
  });

  todoList.addEventListener("click", (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  });
}