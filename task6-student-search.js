// Task 6: Student Search - Search for a student in a predefined list
// This task checks if a student name exists in the students array

// Predefined students array
let students = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer'];

document.getElementById("addStudent").addEventListener("click", function (e) {
    e.preventDefault();

    // Get input
    let studentInput = document.getElementById("studentName").value.trim();
    let studentsList = document.getElementById("studentsList");

    // Validate input
    if (!studentInput) {
        studentsList.innerHTML = "⚠️ Please enter a student name!";
        return;
    }

    // Search for student (case-insensitive)
    let studentUpper = studentInput.toUpperCase();
    let isFound = false;

    for (let i = 0; i < students.length; i++) {
        if (studentUpper === students[i].toUpperCase()) {
            isFound = true;
            break;
        }
    }

    // Display result
    if (isFound) {
        console.log("✅ exists " + studentInput);
        studentsList.innerHTML = `❌ Student "${studentInput}" already exists!`;
    } else {
        console.log("🆕 not exists " + studentInput);
        studentsList.innerHTML = `🎉 Student "${studentInput}" is NOT in the list yet!`;
    }
});

