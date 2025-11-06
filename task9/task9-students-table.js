// Task 9: Students Table Display - Display students data in a table
// This task displays an array of student objects in an HTML table using forEach

// Students data array
let students = [
    { name: "Ahmed", age: 20, grade: 90 },
    { name: "Sara", age: 22, grade: 85 },
    { name: "Mohamed", age: 21, grade: 95 },
    { name: "Mohamed", age: 21, grade: 95 },
    { name: "Mohamed", age: 21, grade: 95 },
    { name: "Mohamed", age: 21, grade: 95 }
];

// Get table body element
let tableBody = document.getElementById("studentsTable").querySelector("tbody");

// Loop through students and create table rows
students.forEach(student => {
    let row = `<tr>
             <td>${student.name}</td>
             <td>${student.age}</td>
             <td>${student.grade}</td>
           </tr>`;
    tableBody.innerHTML += row;
});

