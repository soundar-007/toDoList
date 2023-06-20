const input = document.querySelector("input");
const taskList = document.querySelector(".task-list");
const btn = document.querySelector(".btn");
const container_3 = document.querySelector(".container-3");
var li;
btn.addEventListener("click", AddTask);

function AddTask() {
  if (input.value == "") {
    alert("You Should Write Someting");
  } else {
    li = document.createElement("li");
    li.innerHTML = input.value;
    li.className = "list-items";
    li.addEventListener("click", check);
    const span = document.createElement("span");
    span.innerHTML = `<i class="fi fi-rr-trash"></i>`;
    li.appendChild(span);
    span.setAttribute("onclick", "Remove(event)");
    console.log(span);
    taskList.append(li);

    localStorage.setItem("All_Task", taskList.innerHTML);

    image();
  }

  input.value = "";
}
function Remove(event) {
  const removeEl = event.target.parentNode.parentNode;
  removeEl.remove();
  localStorage.setItem("All_Task", taskList.innerHTML);
  image();
}

function check(event) {
  event.target.classList.toggle("checked");
  localStorage.setItem("All_Task", taskList.innerHTML);
}
document.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    AddTask();
  }
});

function image() {
  if (taskList.childNodes.length > 0) {
    container_3.hidden = true;
  } else {
    container_3.hidden = false;
  }
}
function getTaskList() {
  const list = localStorage.getItem("All_Task");
  taskList.innerHTML = list;
  console.log(taskList);
}
getTaskList();
image();
