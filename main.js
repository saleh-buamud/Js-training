// Array of task objects
let tasks = [
    { name: 'HTML', date: '2012-03-03', isDone: true },
    { name: 'CSS', date: '2013-04-10', isDone: false },
    { name: 'JavaScript', date: '2014-05-15', isDone: true },
    { name: 'PHP', date: '2015-06-20', isDone: false }
];

// Get the table body element
let tableBody = document.querySelector("tbody");

// Loop through each task in the array
tasks.forEach(function (task) {

    // Create table row
    let row = document.createElement("tr");

    // Create table data cells
    let nameCell = document.createElement("td");
    let dateCell = document.createElement("td");
    let statusCell = document.createElement("td");
    let actionCell = document.createElement("td");

    // Fill each cell with the appropriate data
    nameCell.textContent = task.name; // Task name
    dateCell.textContent = task.date; // Task date
    statusCell.textContent = task.isDone ? "منجزة ✅" : "غير منجزة ❌"; // Conditional status text

    // Add edit and delete buttons
    actionCell.innerHTML = `
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i> تعديل
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i> حذف
        </button>
    `;

    // Append all cells to the row
    row.appendChild(nameCell);
    row.appendChild(dateCell);
    row.appendChild(statusCell);
    row.appendChild(actionCell);

    // Append the row to the table body
    tableBody.appendChild(row);
});
