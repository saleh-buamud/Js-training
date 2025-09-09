// Get the greeting text from the element with id 'getting'
const greeting = document.getElementById('getting').innerText; // "Hello"

// Print the original greeting
console.log(greeting + '\n');

// Convert greeting to lowercase and display it in an h2 element
const greetingLowerCase = greeting.toLowerCase();
const lowerCaseHeading = document.createElement('h2');
lowerCaseHeading.innerText = greetingLowerCase;
document.body.appendChild(lowerCaseHeading);
console.log(greetingLowerCase + '\n');

// Convert greeting to uppercase and display it in an h3 element
const greetingUpperCase = greeting.toUpperCase();
const upperCaseHeading = document.createElement('h3');
upperCaseHeading.innerText = greetingUpperCase;
document.body.appendChild(upperCaseHeading);
console.log(greetingUpperCase + '\n');

// Replace character 'o' with 'y' in the greeting and display it in an h4 element
const greetingWithY = greeting.replace('o', 'y');
const replacedHeading = document.createElement('h4');
replacedHeading.innerText = greetingWithY;
document.body.appendChild(replacedHeading);
console.log(greetingWithY + '\n');

// Convert the greeting to uppercase, reverse it, and display it in an h5 element
const modifiedGreetingUpper = greeting.toUpperCase();
const reversedGreeting = modifiedGreetingUpper.split('').reverse().join('');
const reversedHeading = document.createElement('h5');
reversedHeading.innerText = reversedGreeting;
document.body.appendChild(reversedHeading);
console.log(reversedGreeting);