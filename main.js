// Define two variables
var num1 = 10;
var num2 = 4;

// Perform basic arithmetic operations
var mult = num1 * num2;  // Multiplication
var sum = num1 + num2;   // Addition
var sub = num1 - num2;   // Subtraction
var div = num1 / num2;   // Division
var mood = num1 % num2;  // Modulus (remainder)

// Display results inside HTML elements
document.getElementById("outputmult").innerHTML = "<strong>Multiplication:</strong> " + mult;
document.getElementById("outputsum").innerHTML = "<strong>Addition:</strong> " + sum;
document.getElementById("outputsub").innerHTML = "<strong>Subtraction:</strong> " + sub;
document.getElementById("outputdiv").innerHTML = "<strong>Division:</strong> " + div;
document.getElementById("outputmood").innerHTML = "<strong>Modulus:</strong> " + mood;

// Log results in the console for debugging
console.log("Multiplication: " + mult);
console.log("Addition: " + sum);
console.log("Subtraction: " + sub);
console.log("Division: " + div);
console.log("Modulus: " + mood);

// Get the content of elements with IDs 'greeting' and 'subject'


// Get the button element and attach a click event listener
const button = document.getElementById("processBtn");

button.addEventListener("click", function () {
    // Get the input value and remove extra spaces
    const inputText = document.getElementById("name").value.trim();

    // Check if the input is empty
    if (!inputText) {
        alert("Please enter some text!");
        return;
    }

    // Different versions of the text
    const upperMessage = inputText.toUpperCase(); // Convert input to uppercase
    const replacedMessage = inputText.replaceAll('o', 'y'); // Replace all 'o' characters with 'y'
    const combinedMessage = `${upperMessage} ${replacedMessage}`; // Combine the two versions
    const reversedMessage = [...combinedMessage].reverse().join(""); // Reverse the combined text

    // Create formatted HTML string for displaying results
    const outputHTML = `
        <strong>Uppercase Message:</strong> ${upperMessage} <br>
        <strong>Modified Message (o → y):</strong> ${replacedMessage} <br>
        <strong>Combined Message:</strong> ${combinedMessage} <br>
        <strong>Reversed Message:</strong> ${reversedMessage}
    `;

    // Display the results in the 'result' element
    document.getElementById("result").innerHTML = outputHTML;

    // Clear the input field after processing
    document.getElementById("name").value = "";
});


document.getElementById("Btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    const heightM = height / 100;
    const BMI = (weight / (heightM * heightM)).toFixed(2);

    // Determine BMI category
    let category = "";
    if (BMI < 18.5) category = "Underweight";
    else if (BMI < 25) category = "Normal weight";
    else if (BMI < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiResult").innerHTML =
        `Your BMI is: <strong>${BMI}</strong> (${category})`;
});
