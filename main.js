// ...existing code...
/** -----------------------------
 * Global App State
 ------------------------------ */
// Central state for the app
const state = {
    tasks: [],         // Array to store all tasks
    nextTaskId: 1      // Auto-incrementing ID for new tasks
};

/** -----------------------------
 * DOM Elements
 ------------------------------ */
// Cache important DOM elements
const tableBody = document.querySelector("tbody");   // Table body to render tasks
const addTaskBtn = document.getElementById("add-task"); // Button to add a new task
const formContainer = document.getElementById("form"); // Container for task form

/** -----------------------------
 * Utility Functions
 ------------------------------ */
// Create a DOM element with optional CSS classes
function createElement(tag, classes = []) {
    const el = document.createElement(tag);
    classes.forEach(cls => el.classList.add(cls));
    return el;
}

// Clear and hide the form
function clearForm() {
    formContainer.classList.remove("show");
    setTimeout(() => formContainer.innerHTML = "", 300);
}

/** -----------------------------
 * Form Rendering
 ------------------------------ */
// Render a task form (used for adding or editing tasks)
function renderTaskForm(onSubmitCallback, task = null) {
    formContainer.innerHTML = `
        <form id="taskForm">
            <label>Task Name:</label>
            <input type="text" id="taskName" required value="${task ? task.name : ''}">

            <label>Task Date:</label>
            <input type="date" id="taskDate" required value="${task ? task.date : ''}">

            <label>
                <input type="checkbox" id="taskDone" ${task && task.isDone ? 'checked' : ''}>
                Completed
            </label>

            <button type="submit" class="addtask">Save</button>
        </form>
    `;
    formContainer.classList.add("show");

    // Handle form submission
    document.getElementById("taskForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById("taskName").value,
            date: document.getElementById("taskDate").value,
            isDone: document.getElementById("taskDone").checked
        };
        onSubmitCallback(data); // Call the callback (add or edit)
        clearForm();            // Close and clear the form
    });
}

/** -----------------------------
 * CRUD Operations
 ------------------------------ */
// Add a new task to the state
function addTask(taskData) {
    const newTask = { id: state.nextTaskId++, ...taskData };
    state.tasks.push(newTask);
    renderTasks(); // Refresh the table
    alert(`Task "${newTask.name}" added successfully! ✅`); // Message for add
}

// Edit an existing task by ID
function editTask(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;

    renderTaskForm((updatedData) => {
        Object.assign(task, updatedData); // Update task properties
        renderTasks();                   // Refresh the table
        alert(`Task "${task.name}" updated successfully! ✏️`); // Message for edit
    }, task);
}

// Delete a task by ID
function deleteTask(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    state.tasks = state.tasks.filter(t => t.id !== taskId);
    renderTasks(); // Refresh the table
    if (task) alert(`Task "${task.name}" deleted! ❌`); // Message for delete
}


/** -----------------------------
 * Table Rendering
 ------------------------------ */
// Render all tasks in the table
function renderTasks() {
    tableBody.innerHTML = "";

    state.tasks.forEach(task => {
        const row = createElement("tr");

        // Task Name
        const nameCell = createElement("td");
        nameCell.textContent = task.name;

        // Task Date
        const dateCell = createElement("td");
        dateCell.textContent = task.date;

        // Task Status
        const statusCell = createElement("td");
        const statusBtn = createElement("button", [task.isDone ? "done" : "not-done"]);
        statusBtn.textContent = task.isDone ? "Completed ✅" : "Incomplete ❌";

        // Toggle task status on click
        statusBtn.addEventListener("click", () => {
            task.isDone = !task.isDone;
            renderTasks();
        });
        statusCell.appendChild(statusBtn);

        // Action buttons: Edit and Delete
        const actionCell = createElement("td");
        const editBtn = createElement("button", ["edit"]);
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editTask(task.id));

        const deleteBtn = createElement("button", ["delete"]);
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        actionCell.append(editBtn, deleteBtn);

        // Append cells to the row
        row.append(nameCell, dateCell, statusCell, actionCell);
        tableBody.appendChild(row);
    });
}

/** -----------------------------
 * Event Listeners
 ------------------------------ */
// Show add task form when clicking the button
addTaskBtn.addEventListener("click", () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // ensure two digits
    const day = String(currentDate.getDate()).padStart(2, '0');

    const today = `${year}-${month}-${day}`; // format for HTML input type="date"

    // pass today's date as the default value in the form
    renderTaskForm(addTask, { name: '', date: today, isDone: false });
});
// ...existing code...