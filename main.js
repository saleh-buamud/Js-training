// ...existing code...
/** -----------------------------
 * Global App State
 ------------------------------ */
const state = {
    tasks: [],
    nextTaskId: 1
};

/** -----------------------------
 * DOM Elements
 ------------------------------ */
const tableBody = document.querySelector("tbody");
const addTaskBtn = document.getElementById("add-task");
const formContainer = document.getElementById("form");

// If any of these are null, script may run before DOM is ready
if (!tableBody || !addTaskBtn || !formContainer) {
    console.warn("One or more DOM elements are missing. Make sure the script runs after the HTML or wrap it in DOMContentLoaded.");
}

/** -----------------------------
 * Utility Functions
 ------------------------------ */
function createElement(tag, classes = []) {
    const el = document.createElement(tag);
    classes.forEach(cls => el.classList.add(cls));
    return el;
}

function clearForm() {
    formContainer.classList.remove("show");
    setTimeout(() => formContainer.innerHTML = "", 300);
}

/** -----------------------------
 * Form Rendering
 ------------------------------ */
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

    document.getElementById("taskForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById("taskName").value,
            date: document.getElementById("taskDate").value,
            isDone: document.getElementById("taskDone").checked
        };
        onSubmitCallback(data);
        clearForm();
    });
}

/** -----------------------------
 * CRUD Operations
 ------------------------------ */
function addTask(taskData) {
    const newTask = { id: state.nextTaskId++, ...taskData };
    state.tasks.push(newTask);
    saveToLocalStorage();
    renderTasks();
    alert(`Task "${newTask.name}" added successfully! ✅`);
}

function editTask(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;

    renderTaskForm((updatedData) => {
        Object.assign(task, updatedData);
        saveToLocalStorage();
        renderTasks();
        alert(`Task "${task.name}" updated successfully! ✏️`);
    }, task);
}

function deleteTask(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    state.tasks = state.tasks.filter(t => t.id !== taskId);
    saveToLocalStorage();
    renderTasks();
    if (task) alert(`Task "${task.name}" deleted! ❌`);
}

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    localStorage.setItem("nextTaskId", state.nextTaskId);
}

/** -----------------------------
 * Table Rendering & Storage Load
 ------------------------------ */
function loadFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const storedId = localStorage.getItem("nextTaskId");

    if (storedTasks) state.tasks = storedTasks;
    if (storedId) state.nextTaskId = Number(storedId);
}

function renderTasks() {
    if (!tableBody) return;
    tableBody.innerHTML = "";

    state.tasks.forEach(task => {
        const row = createElement("tr");

        const nameCell = createElement("td");
        nameCell.textContent = task.name;

        const dateCell = createElement("td");
        dateCell.textContent = task.date;

        const statusCell = createElement("td");
        const statusBtn = createElement("button", [task.isDone ? "done" : "not-done"]);
        statusBtn.textContent = task.isDone ? "Completed ✅" : "Incomplete ❌";

        statusBtn.addEventListener("click", () => {
            task.isDone = !task.isDone;
            saveToLocalStorage();
            renderTasks();
        });
        statusCell.appendChild(statusBtn);

        const actionCell = createElement("td");
        const editBtn = createElement("button", ["edit"]);
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editTask(task.id));

        const deleteBtn = createElement("button", ["delete"]);
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        actionCell.append(editBtn, deleteBtn);

        row.append(nameCell, dateCell, statusCell, actionCell);
        tableBody.appendChild(row);
    });
}

/** -----------------------------
 * Event Listeners
 ------------------------------ */
addTaskBtn && addTaskBtn.addEventListener("click", () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const today = `${year}-${month}-${day}`;
    renderTaskForm(addTask, { name: '', date: today, isDone: false });
});

/** -----------------------------
 * Initialize on page load
 ------------------------------ */
// Option A: If your script is at the end of <body>, this is fine:
loadFromLocalStorage();
renderTasks();

// Option B: If your script is in <head>, wrap with DOMContentLoaded:
// document.addEventListener("DOMContentLoaded", () => {
//     loadFromLocalStorage();
//     renderTasks();
// });
