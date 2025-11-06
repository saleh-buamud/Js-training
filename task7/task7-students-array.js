// Task 7: Students Array Display - Display 2D array of students and their ages
// This task displays a nested array (students with ages) in HTML

// Get display element
let stu = document.getElementById("studentsList");

// 2D array: [name, age]
let students = [
    ['Ahmed', 20],
    ['Sayed', 22],
    ['Eman', 19],
    ['Mahmoud', 21],
    ['Ameer', 23]
];

// Loop through 2D array and display each student
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        stu.innerHTML += ` ${students[i][j]} `;
    }
    stu.innerHTML += "<br>";
}

