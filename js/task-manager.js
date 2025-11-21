/** -----------------------------
 * Task Manager (No LocalStorage)
 * Contains fake initial data
 ------------------------------ */

// Fake sample data

let savedTasks = localStorage.getItem("tasks"); // قراءة النص المخزن

let tasks;

if (savedTasks) {
    // إذا وجدنا بيانات مخزنة → نحولها من String إلى Object
    tasks = JSON.parse(savedTasks);
} else {
    // إذا لا يوجد بيانات → نستخدم بيانات جاهزة
    tasks = [
        { id: 1, name: "Build CRUD with JS", date: "5/11/2025", isDone: false },
        { id: 2, name: "Study Laravel", date: "6/11/2025", isDone: true },
        { id: 3, name: "Practice Bootstrap", date: "7/11/2025", isDone: false }
    ];
}

let nextTaskId = tasks.length + 1;

const tableBody = document.getElementById("taskBody");
const addTaskBtn = document.getElementById("addTaskBtn");

/** -----------------------------
 * Render Table
 ------------------------------ */
function renderTable() {
    tableBody.innerHTML = "";

    tasks.forEach(task => {
        const tr = document.createElement("tr");

        // ID
        const tdId = document.createElement("td");
        tdId.textContent = task.id;
        tr.appendChild(tdId);

        // Name
        const tdName = document.createElement("td");
        tdName.textContent = task.name;
        if (task.isDone) tdName.classList.add("done-task");
        tr.appendChild(tdName);

        // Date
        const tdDate = document.createElement("td");
        tdDate.textContent = task.date;
        tr.appendChild(tdDate);

        // Edit
        const tdEdit = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.innerHTML = `<i class="fa fa-edit icon-btn edit"></i>`;
        editBtn.onclick = () => editTask(task.id);
        tdEdit.appendChild(editBtn);
        tr.appendChild(tdEdit);

        // Delete
        const tdDelete = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa fa-trash icon-btn delete"></i>`;
        deleteBtn.onclick = () => deleteTask(task.id);
        tdDelete.appendChild(deleteBtn);
        tr.appendChild(tdDelete);

        // Done
        const tdDone = document.createElement("td");
        const doneBtn = document.createElement("button");
        doneBtn.innerHTML = `<i class="fa ${task.isDone ? "fa-check-circle" : "fa-check"} icon-btn done"></i>`;
        doneBtn.onclick = () => toggleDone(task.id);
        tdDone.appendChild(doneBtn);
        tr.appendChild(tdDone);

        tableBody.appendChild(tr);
    });
}

/** -----------------------------
 * Add Task
 ------------------------------ */
addTaskBtn.addEventListener("click", () => {
    const taskName = prompt("Enter task name:");
    if (!taskName) return;

    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    tasks.push({
        id: nextTaskId++,
        name: taskName,
        date: formattedDate,
        isDone: false
    });
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);
    renderTable();
});

/** -----------------------------
 * Delete Task
 ------------------------------ */
function deleteTask(id) {
    if (!confirm("Are you sure you want to delete this task?")) return;
    tasks = tasks.filter(t => t.id !== id);
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);
    renderTable();
}

/** -----------------------------
 * Edit Task
 ------------------------------ */
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const updated = prompt("Update task:", task.name);
    if (updated) {
        task.name = updated;
        let tasksString = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasksString);
        renderTable();
    }
}

/** -----------------------------
 * Toggle Done
 ------------------------------ */
function toggleDone(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.isDone = !task.isDone;
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);
    renderTable();
}

// First Render
renderTable();

