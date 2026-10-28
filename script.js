const main = document.querySelector("main");
const addbtn = document.getElementById("btn-task");
const form = document.getElementById("submit");
const closeBtn = document.getElementById("close");
let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

addbtn.addEventListener("click", () => {
  form.style.display = "grid";
});

function randerCard(title, priority, id) {
  const newCard = document.createElement("div");
  newCard.classList.add("cards");
  const cardTitle = document.createElement("p");
  cardTitle.textContent = `Title: ${title}`;
  newCard.append(cardTitle);
  const cardPriority = document.createElement("p");
  cardPriority.textContent = `Priority: ${priority}`;
  newCard.append(cardPriority);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete task";
  deleteBtn.classList.add("DeleteBtn");
  newCard.append(deleteBtn);
  main.append(newCard);

  deleteBtn.addEventListener("click", () => {
    tasks.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    randerTasks();
  });
}

function randerTasks() {
  main.replaceChildren();
  tasks.forEach((task, id) => {
    randerCard(task.title, task.priority, id);
  });
}

randerTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const priority = form.elements["priority"].value;
  let title = form.elements["title-input"].value;
  title = title.trim();
  if (title === "" || priority === "") {
    alert("Please give an title and a priority to the task");
  } else {
    let task = { title: title, priority: priority };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    randerTasks();
    form.elements["title-input"].value = "";
    for(let radio of form.elements["priority"]){
      radio.checked = false;
    }
    form.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});
