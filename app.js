// Event handler
const handleSubmitForm = (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") {
    addTodo(input.value);
  }
  input.value = "";
};

// Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);

const handleClickDeleteOrCheck = (e) => {
  if (e.target.name === "checkButton") {
    checkTodo(e);
  }
  if (e.target.name === "deleteButton") {
    deleteTodo(e);
  }
};

document
  .querySelector("ul")
  .addEventListener("click", handleClickDeleteOrCheck);

// Helpers
const addTodo = (todo) => {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fa-solid fa-check"></i></button>
    <button name="deleteButton"><i class="fa-solid fa-trash-can"></i></button>
  `;

  ul.appendChild(li);
  li.classList.add("todo-list-item");
};

const checkTodo = (e) => {
  let item = e.target.parentNode;
  if (item.style.textDecoration === "line-through") {
    item.style.textDecoration = "none";
    item.style.fontStyle = "normal";
  } else {
    item.style.textDecoration = "line-through";
    item.style.fontStyle = "italic";
  }
};

const deleteTodo = (e) => {
  let item = e.target.parentNode;
  item.remove();
};

const handleClearAll = (e) => {
  document.querySelector("ul").innerHTML = "";
};

document.getElementById("clearAll").addEventListener("click", handleClearAll);
