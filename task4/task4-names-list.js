// Task 4: Names List - Add and delete names from a list
// This task manages a dynamic list of names using array operations

// Get DOM elements
const nameInputEl = document.getElementById("nameInput");
const namesListEl = document.getElementById("namesList");
const addBtn = document.getElementById("addNameBtn");
const deleteBtn = document.getElementById("deleteNamesBtn");

// Store names in array
let names = [];

// Update the displayed list
function updateList() {
    namesListEl.innerHTML = names.join(" , ");
}

// Add name button handler
addBtn.addEventListener("click", function () {
    const nameInput = nameInputEl.value.trim();

    // Validate input
    if (nameInput === "") {
        alert("Please enter a name!");
        return;
    }

    // Add name to array and update display
    names.push(nameInput);
    updateList();
    console.log(names);
    nameInputEl.value = "";
});

// Delete name button handler
deleteBtn.addEventListener("click", function () {
    // Check if array is empty
    if (names.length === 0) {
        alert("No names to delete!");
        return;
    }

    // Remove last name and update display
    names.pop();
    updateList();
});

