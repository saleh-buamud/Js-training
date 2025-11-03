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
