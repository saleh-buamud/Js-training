// Get the greeting text from the element with id 'getting'
const greeting = document.getElementById('getting').innerText; // "Hello"

// Print the original greeting
console.log(greeting + '\n');

// Convert greeting to lowercase and display it in an h2 element
const greetingLowerCase = greeting.toLowerCase();
console.log(greetingLowerCase + '\n');

// Convert greeting to uppercase and display it in an h3 element
const greetingUpperCase = greeting.toUpperCase();
console.log(greetingUpperCase + '\n');

// Replace character 'o' with 'y' in the greeting and display it in an h4 element
const greetingWithY = greeting.replace('o', 'y');

console.log(greetingWithY + '\n');

// Convert the greeting to uppercase, reverse it, and display it in an h5 element
const modifiedGreetingUpper = greeting.toUpperCase();
const reversedGreeting = modifiedGreetingUpper.split('').reverse().join('');
console.log(reversedGreeting);

document.getElementById('result').innerText = `${greeting} \n${greetingLowerCase} \n${greetingUpperCase} \n${greetingWithY} \n${reversedGreeting}`;