// Define two numbers for arithmetic operations
const num1 = 10;
const num2 = 4;

// Perform basic arithmetic operations
const sum = num1 + num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;

// Create a formatted message with the results
const message =
    `First Number     : ${num1}\n` +
    `Second Number    : ${num2}\n` +
    `Sum              : ${sum}\n` +
    `Multiplication   : ${multiplication}\n` +
    `Division         : ${division}\n` +
    `Modulus          : ${modulus}`;

// Print the message to the console
console.log(message);

// Display the message on the webpage
const resultParagraph = document.createElement("p");
resultParagraph.textContent = message;
document.body.appendChild(resultParagraph);
