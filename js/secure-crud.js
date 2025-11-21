// Simple CRUD – no localStorage, using array index only

let names = [];
let editingIndex = null;

const form = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const submitBtn = document.getElementById('submitBtn');
const tableBody = document.getElementById('nameTableBody');

// Render Table
function renderTable() {
    tableBody.innerHTML = "";

    names.forEach((item, index) => {
        const tr = document.createElement('tr');

        // Index
        const tdIndex = document.createElement('td');
        tdIndex.textContent = index + 1;
        tr.appendChild(tdIndex);

        // Name
        const tdName = document.createElement('td');
        tdName.textContent = item;
        tr.appendChild(tdName);

        // Actions
        const tdActions = document.createElement('td');

        const updateBtn = document.createElement('button');
        updateBtn.textContent = "Update";
        updateBtn.addEventListener('click', () => startEdit(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => removeName(index));

        tdActions.appendChild(updateBtn);
        tdActions.appendChild(deleteBtn);
        tr.appendChild(tdActions);

        tableBody.appendChild(tr);
    });
}

// Add / Update
form.addEventListener('submit', e => {
    e.preventDefault();
    const value = nameInput.value.trim();
    if (!value) return;

    if (editingIndex !== null) {
        // Update
        names[editingIndex] = value;
        editingIndex = null;
        submitBtn.textContent = "Submit";
    } else {
        // Add new
        names.push(value);
    }

    nameInput.value = "";
    localStorage.setItem("names", names);
    renderTable();
});

// Start Edit
function startEdit(index) {
    nameInput.value = names[index];
    editingIndex = index;
    submitBtn.textContent = "Update";
}

// Remove
function removeName(index) {
    if (!confirm("Delete this name?")) return;

    names.splice(index, 1);
    renderTable();
}

// Initial Render
renderTable();
