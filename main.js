// // Define two variables
// var num1 = 10;
// var num2 = 4;

// // Perform basic arithmetic operations
// var mult = num1 * num2;  // Multiplication
// var sum = num1 + num2;   // Addition
// var sub = num1 - num2;   // Subtraction
// var div = num1 / num2;   // Division
// var mood = num1 % num2;  // Modulus (remainder)

// // Display results inside HTML elements
// document.getElementById("outputmult").innerHTML = "<strong>Multiplication:</strong> " + mult;
// document.getElementById("outputsum").innerHTML = "<strong>Addition:</strong> " + sum;
// document.getElementById("outputsub").innerHTML = "<strong>Subtraction:</strong> " + sub;
// document.getElementById("outputdiv").innerHTML = "<strong>Division:</strong> " + div;
// document.getElementById("outputmood").innerHTML = "<strong>Modulus:</strong> " + mood;

// // Log results in the console for debugging
// console.log("Multiplication: " + mult);
// console.log("Addition: " + sum);
// console.log("Subtraction: " + sub);
// console.log("Division: " + div);
// console.log("Modulus: " + mood);

// // Get the content of elements with IDs 'greeting' and 'subject'


// // Get the button element and attach a click event listener
// const button = document.getElementById("processBtn");

// button.addEventListener("click", function () {
//     // Get the input value and remove extra spaces
//     const inputText = document.getElementById("name").value.trim();

//     // Check if the input is empty
//     if (!inputText) {
//         alert("Please enter some text!");
//         return;
//     }

//     // Different versions of the text
//     const upperMessage = inputText.toUpperCase(); // Convert input to uppercase
//     const replacedMessage = inputText.replaceAll('o', 'y'); // Replace all 'o' characters with 'y'
//     const combinedMessage = `${upperMessage} ${replacedMessage}`; // Combine the two versions
//     const reversedMessage = [...combinedMessage].reverse().join(""); // Reverse the combined text

//     // Create formatted HTML string for displaying results
//     const outputHTML = `
//         <strong>Uppercase Message:</strong> ${upperMessage} <br>
//         <strong>Modified Message (o → y):</strong> ${replacedMessage} <br>
//         <strong>Combined Message:</strong> ${combinedMessage} <br>
//         <strong>Reversed Message:</strong> ${reversedMessage}
//     `;

//     // Display the results in the 'result' element
//     document.getElementById("result").innerHTML = outputHTML;

//     // Clear the input field after processing
//     document.getElementById("name").value = "";
// });


// document.getElementById("Btn").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission

//     const weight = parseFloat(document.getElementById("weight").value);
//     const height = parseFloat(document.getElementById("height").value);

//     if (!weight || !height || weight <= 0 || height <= 0) {
//         alert("Please enter valid positive numbers for weight and height.");
//         return;
//     }

//     const heightM = height / 100;
//     const BMI = (weight / (heightM * heightM)).toFixed(2);

//     // Determine BMI category
//     let category = "";
//     if (BMI < 18.5) category = "Underweight";
//     else if (BMI < 25) category = "Normal weight";
//     else if (BMI < 30) category = "Overweight";
//     else category = "Obese";

//     document.getElementById("bmiResult").innerHTML =
//         `Your BMI is: <strong>${BMI}</strong> (${category})`;
// });


// Get references to DOM elements
// const nameInputEl = document.getElementById("nameInput");
// const namesListEl = document.getElementById("namesList");
// const addBtn = document.getElementById("addNameBtn");
// const deleteBtn = document.getElementById("deleteNamesBtn");

// // Array to store the list of names
// let names = [];

// // Function to update the display of names in the HTML
// function updateList() {
//     namesListEl.innerHTML = names.join(" , ");
// }

// // Add click event listener to the Add button
// addBtn.addEventListener("click", function () {
//     // Get and trim the input value
//     const nameInput = nameInputEl.value.trim();

//     // Check if input is empty
//     if (nameInput === "") {
//         alert("Please enter a name!");
//         return;
//     }

//     // Add the new name to array
//     names.push(nameInput);

//     // Update the display
//     updateList();

//     // Log names array for debugging
//     console.log(names);

//     // Clear the input field
//     nameInputEl.value = "";
// });

// // Add click event listener to the Delete button
// deleteBtn.addEventListener("click", function () {
//     // Check if names array is empty
//     if (names.length === 0) {
//         alert("No names to delete!");
//         return;
//     }

//     // Remove the last name from array
//     names.pop();

//     // Update the display
//     updateList();
// });

//A, E, I, O, U

// document.getElementById("addtext").addEventListener("click", function () {
//     // Get the user input and trim whitespace
//     const inputText = document.getElementById("text-input").value.trim();
//     // Define vowels in uppercase for case-insensitive comparison
//     const vowels = ['A', 'E', 'I', 'O', 'U'];

//     // Reference to the element where non-vowel characters will be shown
//     const showEl = document.getElementById("show");

//     // If the input is empty, notify the user and stop processing
//     if (inputText === "") {
//         alert("Please enter a letter or word!");
//         return;
//     }

//     // Clear any previous results before rendering new output
//     showEl.innerHTML = "";

//     // Loop through each character in the input
//     for (let i = 0; i < inputText.length; i++) {

//         // If the character is not a vowel, append it to the result container
//         if (!vowels.includes(currentChar)) {
//             showEl.innerHTML += `<div style="color:red;">${currentChar}</div>`;
//         }
//     }

//     // Clear the input field after processing
//     document.getElementById("text-input").value = "";
// });

let students = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer'];

document.getElementById("addStudent").addEventListener("click", function (e) {
    e.preventDefault();

    let studentInput = document.getElementById("studentName").value.trim();
    let studentsList = document.getElementById("studentsList");

    if (!studentInput) {
        studentsList.innerHTML = "⚠️ Please enter a student name!";
        return;
    }

    let studentUpper = studentInput.toUpperCase();
    let isFound = false; // ✅ Boolean variable to track existence

    for (let i = 0; i < students.length; i++) {
        if (studentUpper === students[i].toUpperCase()) {
            isFound = true;
            break; // Stop loop once found
        }
    }

    if (isFound) {
        console.log("✅ exists " + studentInput);
        studentsList.innerHTML = `❌ Student "${studentInput}" already exists!`;
    } else {
        console.log("🆕 not exists " + studentInput);
        studentsList.innerHTML = `🎉 Student "${studentInput}" is NOT in the list yet!`;
    }
});
