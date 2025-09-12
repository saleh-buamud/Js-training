// Initialize an empty array to store student names
let studentList = [];

// Check type of studentList in console (for debugging)
console.log(typeof studentList);

// Handle add student button click
document.getElementById("insert").addEventListener("click", function () {
    // Get input value (student name) from input field
    let studentName = document.getElementById("student").value;

    // Push the new student into the array
    studentList.push(studentName);

    // Display updated student list in the result container
    document.getElementById("result").innerHTML = `${studentList.join(", ")} <br>`;
    document.getElementById("student").value = ""; // Clear input field after adding
});

// Handle delete student button click
document.getElementById("delete").addEventListener("click", function () {
    // Remove the last student from the array
    studentList.pop();

    // Update the result container with the current student list
    document.getElementById("result").innerHTML = `${studentList.join(", ")} <br>`;

    // Log the updated array in console for debugging
    console.log(studentList);
});
