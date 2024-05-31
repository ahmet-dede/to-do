let inputBox = document.getElementById("input");
let toDoList = document.getElementById("todo-list");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    toDoList.appendChild(li);
  }
}
