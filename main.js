// // Array containing all student names
// const studentNames = ['Saleh', 'Noor', 'Mohamed', 'Mona', 'Hana'];

// // Flag to indicate if the searched student was found
// let isStudentFound = false;

// // Display all student names separated by dashes
// document.getElementById('studentName').innerHTML = studentNames.join(' --- ') + '<br>';

// // Add click event listener to the search button
// document.getElementById('buttonSearch').addEventListener('click', function () {
//     // Get the value entered by the user in the search input
//     const searchInput = document.getElementById('searchInput').value;

//     // Convert the input to lowercase for case-insensitive comparison
//     const searchInputLowerCase = searchInput.toLowerCase();

//     // Loop through the student names array to check for a match
//     for (let i = 0; i < studentNames.length; i++) {
//         // Compare each student name (in lowercase) with the search input
//         if (searchInputLowerCase === studentNames[i].toLowerCase()) {
//             isStudentFound = true;
//             break;
//         }
//     }

//     // Display result based on whether the student was found or not
//     if (!isStudentFound) {
//         document.getElementById('result').innerHTML = 'NOT found';
//     } else {
//         document.getElementById('result').innerHTML = 'FOUND';
//     }

//     // Reset the flag for the next search
//     isStudentFound = false;

//     // Clear the search input field
//     document.getElementById('add').value = '';
// });

// const students = [
//     ['saleh', 22],
//     ['noor', 21],
//     ['mohamed', 23],
//     ['mona', 20],
//     ['hana', 22]
// ];
// console.log(students);

// for (let multiplier = 1; multiplier <= 10; multiplier++) {
//     // Create a title for the current multiplication table
//     const tableTitle = `Multiplication Table ${multiplier}`;
//     document.getElementById("result").innerHTML += `<h2>${tableTitle}</h2>`;

//     for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
//         // Calculate the product of multiplier and multiplicand
//         const product = multiplier * multiplicand;
//         document.getElementById("result").innerHTML += `${multiplier} x ${multiplicand} = ${product}<br>`;
//     }
//     document.getElementById("result").innerHTML += `<hr>`;
// }
// Improved variable naming and best practices for lines 62-74

// /**
//  * Returns a new array with the elements reversed.
//  * @param {Array} originalArray - The array to reverse.
//  * @returns {Array} reversedArray - The reversed array.
//  */
// function reverseArray(originalArray = []) {
//     const reversedArray = [];

//     // Add each element to the beginning of the new array
//     for (let index = 0; index < originalArray.length; index++) {
//         reversedArray.unshift(originalArray[index]);
//     }
//     return reversedArray;
// }

// const sampleArray = ['saleh', 1, 2, 3, 4, 5, 6];
// // Log the reversed array to the console
// console.log(reverseArray(sampleArray));

// setTimeout(() => {
//     console.log('Hello after 3 seconds');
// }, 4000);

// setTimeout(() => {
//     console.log('Hello after 3 seconds');
// }, 4000);


// setInterval(() => {
//     console.log('Hello after 2 seconds');
// }, 2000);


//document.body.style.backgroundColor = getRandomHexColor();

// Get the button element by its ID and attach a click event listener
document.getElementById("changeButton").addEventListener("click", function () {
    changeBackgroundColor();
});

// Function to start changing the background color every second
function changeBackgroundColor() {
    setInterval(function () {
        // Apply a random color to the body background
        document.body.style.backgroundColor = getRandomHexColor();
        document.getElementById("changeButton").style.backgroundColor = getRandomHexColor();
    }, 1000); // Change color every 1000ms = 1 second
}

// Function to generate a random HEX color
function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF'; // All possible HEX characters
    let color = '#'; // HEX color always starts with "#"

    // Build a 6-character HEX code
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16); // Random number from 0 to 15
        color += hexChars[randomIndex]; // Pick a random HEX char and add it to color
    }

    return color; // Return the full HEX color (e.g., "#3F9A2C")
}