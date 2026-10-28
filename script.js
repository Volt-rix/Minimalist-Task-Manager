// Find the HTML elements that the task manager uses.
const main = document.querySelector("main");
const addbtn = document.getElementById("btn-task");
const form = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const toastNotification = document.querySelector("#toast-notifications");

// Load saved tasks, or start with an empty list when none are saved.
let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

// Show a short success message after a task is added.
function toastCreatedSuccess() {
  console.log("Toast added");
  const toastDiv = document.createElement("div");
  toastDiv.className = "toast";
  toastDiv.role = "alert";
  toastDiv.innerHTML = `
  <div class="toast-icon">
          <svg
            class="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>

        <div class="toast-message">Task Added successfully.</div>

        <button
          type="button"
          class="toast-close"
          aria-label="Close"
        >
          <svg
            class="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          <span class="sr-only">Close</span>
        </button>
  `;
  const icon = toastDiv.querySelector(".toast-icon");
  const text = toastDiv.querySelector(".toast-message");
  icon.style.color = "#006400 ";
  text.style.color = "#006400 ";
  toastNotification.append(toastDiv);
  const closeBtn = toastDiv.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => {
    toastDiv.remove();
  });
  setTimeout(() => {
    if (toastDiv) {
      toastDiv.remove();
    }
  }, 3000);
}

// Show a red success message after a task is deleted.
function toastDeletedSuccess() {
  const toastDiv = document.createElement("div");
  toastDiv.className = "toast";
  toastDiv.role = "alert";
  toastDiv.innerHTML = `
  <div class="toast-icon">
          <svg
            class="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6h18
                 M8 6V4h8v2
                 M19 6l-1 14H6L5 6
                 M10 11v5
                 M14 11v5"
              />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>

        <div class="toast-message">Task Deleted successfully.</div>

        <button
          type="button"
          class="toast-close"
          aria-label="Close"
        >
          <svg
            class="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          <span class="sr-only">Close</span>
        </button>
  `;
  const icon = toastDiv.querySelector(".toast-icon");
  const text = toastDiv.querySelector(".toast-message");
  const closeBtn = toastDiv.querySelector(".toast-close");

  closeBtn.addEventListener("click", () => {
    toastDiv.remove();
  });
  icon.style.color = "#b10000";
  text.style.color = "#b50000";
  toastNotification.append(toastDiv);
  setTimeout(() => {
    if (toastDiv) {
      toastDiv.remove();
    }
  }, 3000);
}

// Warn the user when the title or priority is missing.
function toastWarning() {
  const toastDiv = document.createElement("div");
  toastDiv.className = "toast";
  toastDiv.role = "alert";
  toastDiv.innerHTML = `
  <div class="toast-icon">
          <svg
            class="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M12 3v12m0 5h.01"
            />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>

        <div class="toast-message"> Please add a title and select a priority of the task.</div>

        <button
          type="button"
          class="toast-close"
          aria-label="Close"
        >
          <svg
            class="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          <span class="sr-only">Close</span>
        </button>
  `;
  const icon = toastDiv.querySelector(".toast-icon");
  const text = toastDiv.querySelector(".toast-message");
  const closeBtn = toastDiv.querySelector(".toast-close");

  closeBtn.addEventListener("click", () => {
    toastDiv.remove();
  });
  icon.style.color = "#8B8000";
  text.style.color = "#8B8000 ";
  toastNotification.append(toastDiv);
  setTimeout(() => {
    if (toastDiv) {
      toastDiv.remove();
    }
  }, 3000);
}

// Opening the add-task button displays the task form.
addbtn.addEventListener("click", () => {
  form.style.display = "grid";
});

// Create one card for a single task and its delete button.
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

  // Remove this task from the list and save the updated list.
  deleteBtn.addEventListener("click", () => {
    tasks.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    randerTasks();
    toastDeletedSuccess();
  });
}

// Rebuild the task list so that it always matches saved data.
function randerTasks() {
  main.replaceChildren();
  tasks.forEach((task, id) => {
    randerCard(task.title, task.priority, id);
  });
}

// Display saved tasks as soon as the page loads.
randerTasks();

// Handle task submission and prevent the browser's normal page reload.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Read the form values and remove spaces around the title.
  const priority = form.elements["priority"].value;
  let title = form.elements["title-input"].value;
  title = title.trim();
  if (title === "" || priority === "") {
    toastWarning();
  } else {
    // Add the new task, save it, and redraw the task list.
    let task = { title: title, priority: priority };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    randerTasks();
    toastCreatedSuccess();
    form.elements["title-input"].value = "";
    for (let radio of form.elements["priority"]) {
      radio.checked = false;
    }
    form.style.display = "none";
  }
});

// Hide the task form when the close button is clicked.
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});
