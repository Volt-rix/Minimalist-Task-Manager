# Minimalist Task Manager

A clean, responsive To-Do List and Task Manager web application built with vanilla HTML, CSS, and JavaScript. This project was developed as a hands-on learning project to practice core web development concepts, including DOM manipulation, event-driven programming, form validation, and client-side data persistence with `localStorage`.

---

## Overview

The **Minimalist Task Manager** allows users to organize their daily tasks with an uncluttered, distraction-free interface. Users can create tasks with specific priority levels ("High" or "Low"), view them as organized visual cards in a responsive grid, delete tasks when finished, and have all data automatically preserved between browser refreshes without requiring any backend server or external libraries.

---

## Features

- **Add Tasks**: Create new tasks with a descriptive title and an assigned priority level.
- **Priority Selection**: Categorize tasks as either **High** or **Low** priority using radio inputs.
- **Form Validation**:
  - Prevents empty submissions or titles containing only whitespace (`.trim()`).
  - Ensures a priority option is selected before adding a task.
  - Displays user feedback via browser alerts if fields are missing.
- **Card-Based UI**: Displays each task inside its own card featuring the title, a styled priority badge, and a delete action.
- **Task Deletion**: Remove individual tasks with automatic updates to both the UI and stored data.
- **Data Persistence**: Uses the browser's `localStorage` API to save and retrieve tasks, preserving state across page reloads.
- **Modal Task Form**: Clean pop-up form interface that opens when clicking "Add task" and closes upon submission or when clicking the "close" button.
- **Responsive & Accessible Design**:
  - CSS Grid layout that adapts from mobile screens to desktop viewports.
  - Interactive hover and active button states.
  - Supports `prefers-reduced-motion` for accessibility.

---

## Technologies Used

- **HTML5**: Provides semantic page structure, including `<header>`, `<main>`, and a `<form>` modal with accessible labels and input controls.
- **CSS3**: Handles all visual styling, layout, and responsiveness:
  - CSS custom properties (variables) for a consistent color palette and spacing.
  - CSS Grid and Flexbox for layout management and responsive card distribution.
  - Fixed-position overlay for modal presentation.
  - Media queries for mobile responsiveness.
- **JavaScript (Vanilla ES6+)**: Powers application behavior, data handling, and DOM interaction without third-party frameworks or libraries.
- **Web Storage API (`localStorage`)**: Enables persistent client-side storage so user data remains intact across sessions.

---

## How to Run Locally

Because this project is built entirely with standard web technologies, it requires no build steps, package installations, or local servers.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd your-repository-name
   ```

3. **Open the application**:
   - Double-click `index.html` to open it directly in any modern web browser (Chrome, Firefox, Safari, Edge).
   - Alternatively, if using Visual Studio Code, right-click `index.html` and select **"Open with Live Server"**.

---

## Project Structure

```text
├── index.html    # Application structure, modal form, and base layout
├── style.css     # Minimalist design system, grid styles, and UI states
└── script.js     # State management, DOM rendering, validation, and storage
```

---

## How It Works

The application operates on a straightforward unidirectional data workflow:

1. **State Initialization**:
   When the page loads, the app reads existing data from `localStorage` under the `"tasks"` key. It uses `JSON.parse()` to convert the stored JSON string back into an array of task objects. If no data exists, it defaults to an empty array (`[]`) using the nullish coalescing operator (`??`):
   ```javascript
   let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
   ```

2. **DOM Rendering**:
   The rendering function clears the current contents of `<main>` using `main.replaceChildren()` to avoid duplicate elements, then iterates over the `tasks` array. For each task object `{ title, priority }`, it dynamically constructs the card structure (`document.createElement`), assigns appropriate CSS classes, and injects the title, priority tag, and delete button.

3. **Form Handling & Validation**:
   Clicking the **Add task** button reveals the modal by changing the form's display style to `grid`. When the user submits:
   - The form submission event is intercepted using `event.preventDefault()` to stop page reloads.
   - The title is trimmed of whitespace.
   - If either the title or priority is blank, an alert prompts the user to complete the form.
   - If valid, a new task object is created and pushed into the `tasks` array.

4. **Persistence & Updates**:
   Whenever a task is added or deleted:
   - The updated `tasks` array is serialized with `JSON.stringify()` and saved to `localStorage`.
   - The UI re-renders immediately to reflect the changes.
   - After addition, the form inputs are reset and the modal closes automatically.

5. **Task Deletion**:
   Each rendered card attaches a click event listener to its delete button. When clicked, it removes the item at its respective array index using `tasks.splice(id, 1)`, synchronizes the change to `localStorage`, and calls the render function to refresh the display.

---

## What I Learned

Building this project helped reinforce fundamental front-end web development practices:

- **DOM Creation & Manipulation**: Moving beyond static HTML by dynamically creating, styling, and appending elements (`createElement`, `append`, `replaceChildren`).
- **State Management Basics**: Maintaining a single source of truth (`tasks` array) and synchronizing it with both the user interface and browser storage.
- **Event-Driven Programming**: Working with `click` and `submit` events, event objects, and preventing default browser behaviors (`e.preventDefault()`).
- **Form Controls & Validation**: Accessing form inputs via `form.elements`, reading radio button selections, sanitizing text input with `.trim()`, and resetting inputs programmatically.
- **JSON & Client-Side Storage**: Understanding how to serialize objects with `JSON.stringify()` for `localStorage` and parse them back into usable JavaScript structures with `JSON.parse()`.
- **Scoped Handlers & Closures**: Managing item indices during iteration so delete buttons reference the correct task.

---

## Future Improvements

Potential features planned for future iterations:

- [ ] **Task Completion**: Add a checkbox to mark tasks as completed with strikethrough styling.
- [ ] **Task Editing**: Allow users to update existing task titles and priorities inline or via modal.
- [ ] **Filtering & Sorting**: Filter tasks by priority (High/Low) or sort by creation order.
- [ ] **Due Dates**: Add an optional date picker to assign deadlines to tasks.
- [ ] **Custom In-App Alerts**: Replace native browser `alert()` pop-ups with accessible, styled toast notifications.
- [ ] **Unique Task IDs**: Transition from array index references to unique IDs (e.g., `crypto.randomUUID()`) to make data management more robust.

---

## Author

Created by **[Your Name]**  
- GitHub: [@your-username](https://github.com/your-username)
