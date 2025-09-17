// // // // // Array containing all student names
// // // // const studentNames = ['Saleh', 'Noor', 'Mohamed', 'Mona', 'Hana'];

// // // // // Flag to indicate if the searched student was found
// // // // let isStudentFound = false;

// // // // // Display all student names separated by dashes
// // // // document.getElementById('studentName').innerHTML = studentNames.join(' --- ') + '<br>';

// // // // // Add click event listener to the search button
// // // // document.getElementById('buttonSearch').addEventListener('click', function () {
// // // //     // Get the value entered by the user in the search input
// // // //     const searchInput = document.getElementById('searchInput').value;

// // // //     // Convert the input to lowercase for case-insensitive comparison
// // // //     const searchInputLowerCase = searchInput.toLowerCase();

// // // //     // Loop through the student names array to check for a match
// // // //     for (let i = 0; i < studentNames.length; i++) {
// // // //         // Compare each student name (in lowercase) with the search input
// // // //         if (searchInputLowerCase === studentNames[i].toLowerCase()) {
// // // //             isStudentFound = true;
// // // //             break;
// // // //         }
// // // //     }

// // // //     // Display result based on whether the student was found or not
// // // //     if (!isStudentFound) {
// // // //         document.getElementById('result').innerHTML = 'NOT found';
// // // //     } else {
// // // //         document.getElementById('result').innerHTML = 'FOUND';
// // // //     }

// // // //     // Reset the flag for the next search
// // // //     isStudentFound = false;

// // // //     // Clear the search input field
// // // //     document.getElementById('add').value = '';
// // // // });

// // // // const students = [
// // // //     ['saleh', 22],
// // // //     ['noor', 21],
// // // //     ['mohamed', 23],
// // // //     ['mona', 20],
// // // //     ['hana', 22]
// // // // ];
// // // // console.log(students);

// // // // for (let multiplier = 1; multiplier <= 10; multiplier++) {
// // // //     // Create a title for the current multiplication table
// // // //     const tableTitle = `Multiplication Table ${multiplier}`;
// // // //     document.getElementById("result").innerHTML += `<h2>${tableTitle}</h2>`;

// // // //     for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
// // // //         // Calculate the product of multiplier and multiplicand
// // // //         const product = multiplier * multiplicand;
// // // //         document.getElementById("result").innerHTML += `${multiplier} x ${multiplicand} = ${product}<br>`;
// // // //     }
// // // //     document.getElementById("result").innerHTML += `<hr>`;
// // // // }
// // // // Improved variable naming and best practices for lines 62-74

// // // // /**
// // // //  * Returns a new array with the elements reversed.
// // // //  * @param {Array} originalArray - The array to reverse.
// // // //  * @returns {Array} reversedArray - The reversed array.
// // // //  */
// // // // function reverseArray(originalArray = []) {
// // // //     const reversedArray = [];

// // // //     // Add each element to the beginning of the new array
// // // //     for (let index = 0; index < originalArray.length; index++) {
// // // //         reversedArray.unshift(originalArray[index]);
// // // //     }
// // // //     return reversedArray;
// // // // }

// // // // const sampleArray = ['saleh', 1, 2, 3, 4, 5, 6];
// // // // // Log the reversed array to the console
// // // // console.log(reverseArray(sampleArray));

// // // // setTimeout(() => {
// // // //     console.log('Hello after 3 seconds');
// // // // }, 4000);

// // // // setTimeout(() => {
// // // //     console.log('Hello after 3 seconds');
// // // // }, 4000);


// // // // setInterval(() => {
// // // //     console.log('Hello after 2 seconds');
// // // // }, 2000);


// // // //document.body.style.backgroundColor = getRandomHexColor();

// // // // Get the button element by its ID and attach a click event listener
// // // document.getElementById("changeButton").addEventListener("click", function () {
// // //     changeBackgroundColor();
// // // });

// // // // Function to start changing the background color every second
// // // function changeBackgroundColor() {
// // //     setInterval(function () {
// // //         // Apply a random color to the body background
// // //         document.body.style.backgroundColor = getRandomHexColor();
// // //         document.getElementById("changeButton").style.backgroundColor = getRandomHexColor();
// // //     }, 1000); // Change color every 1000ms = 1 second
// // // }

// // // // Function to generate a random HEX color
// // // function getRandomHexColor() {
// // //     const hexChars = '0123456789ABCDEF'; // All possible HEX characters
// // //     let color = '#'; // HEX color always starts with "#"

// // //     // Build a 6-character HEX code
// // //     for (let i = 0; i < 6; i++) {
// // //         const randomIndex = Math.floor(Math.random() * 16); // Random number from 0 to 15
// // //         color += hexChars[randomIndex]; // Pick a random HEX char and add it to color
// // //     }

// // //     return color; // Return the full HEX color (e.g., "#3F9A2C")
// // // }

// // // Function  return 

// // // Function to calculate the sum and count of array elements
// // function getArraySumAndCount(array) {
// //     // Calculate the sum of all elements in the array
// //     const totalSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// //     // Get the number of elements in the array
// //     const elementCount = array.length;
// //     let newList = [totalSum, elementCount];
// //     // Return an object containing the sum and count
// //     return newList;
// // }
// // // Example usage
// // const numbersArray = [1, 2, 3, 4];
// // const arrayStats = getArraySumAndCount(numbersArray);

// // console.log("========================================");
// // console.log("Sum:", arrayStats);// Output: 4
// // console.log("========================================");

// // Array of student objects with their details and a method to show full name
// const students = [
//     {
//         firstName: "saleh",
//         lastName: "noor",
//         age: 22,
//         showName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     },
//     {
//         firstName: "mohamed",
//         lastName: "ali",
//         age: 66,
//         showName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     },
//     {
//         firstName: "mona",
//         lastName: "hassan",
//         age: 20,
//         showName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     },
//     {
//         firstName: "mona",
//         lastName: "hassan",
//         age: 20,
//         showName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     },
//     {
//         firstName: "mona",
//         lastName: "hassan",
//         age: 20,
//         showName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     },
// ];

// // Reference to the table body element
// const tableBodyElement = document.getElementById("tableBody");

// // Loop through each student and create a table row for their data
// students.forEach(function (student) {
//     // Create a table row with student details
//     const tableRow = `
//         <tr>
//             <td>${student.firstName}</td>
//             <td>${student.lastName}</td>
//             <td>${student.age}</td>
//         </tr>
//     `;
//     // Append the row to the table body
//     tableBodyElement.innerHTML += tableRow;
// });
// Show input value in the preview div when clicking on the form container
document.getElementById("formContainer").addEventListener("click", () => {
    let inputValue = document.getElementById("inputName").value;
    document.getElementById("preview").innerHTML = inputValue;
});

// Event listener for Add button -> create a new list item and add it to the UL
document.getElementById("btnAdd").addEventListener("click", (event) => {
    // event.preventDefault(); // Prevent form from refreshing the page

    // Get input value
    let inputValue = document.getElementById("inputName").value;


    // Create new <li> element
    const listItem = document.createElement("li");

    // Create a text node with the input value
    const textNode = document.createTextNode(inputValue);

    // Append the text to the <li>
    listItem.appendChild(textNode);

    // Append the new <li> to the existing <ul>
    const listItems = document.getElementById("listItems");
    listItems.appendChild(listItem);

    // Clear the preview and input field
    document.getElementById("preview").innerHTML = '';
    document.getElementById("inputName").value = '';
});
