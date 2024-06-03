let inputBox = document.getElementById("input");
let toDoList = document.getElementById("todo-list");

/* const tasks = [{ id: "listItem", checked: "true" }];

for (i = 0; i < tasks.length; i++) {
  tasks[i] = addTask();
} */

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    toDoList.appendChild(li);

    // Create an edit button and append it to the list item
    let editSpan = document.createElement("SPAN");
    let editBtn = document.createElement("i");
    editBtn.className = "fa fa-edit";
    editSpan.className = "edit";
    editSpan.appendChild(editBtn);
    li.appendChild(editSpan);

    // Create a close button and append it to the list item
    let closeSpan = document.createElement("SPAN");
    let closeTxt = document.createTextNode("\u00D7");
    closeSpan.className = "close";
    closeSpan.appendChild(closeTxt);
    li.appendChild(closeSpan);
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

//checks whether the list item is checked or not

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//adds a close button at the end of the list item

var closeBtn = document.getElementsByTagName("LI");
var i;
for (i = 0; i < closeBtn.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  closeBtn[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}