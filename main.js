// Add click event listener to the greeting button
document.getElementById('btn-getting').addEventListener('click', function () {
    // Get the value from the greeting input field
    const inputGreeting = document.getElementById('getting').value;

    // Convert greeting to lowercase
    const greetingLowerCase = inputGreeting.toLowerCase();
    console.log(greetingLowerCase + '\n');

    // Convert greeting to uppercase
    const greetingUpperCase = inputGreeting.toUpperCase();
    console.log(greetingUpperCase + '\n');

    // Replace character 'S' with 'W' in the greeting
    const greetingWithW = inputGreeting.replace('S', 'W');
    console.log(greetingWithW + '\n');

    // Convert the greeting to uppercase, reverse it
    const reversedGreeting = greetingUpperCase.split('').reverse().join('');
    console.log(reversedGreeting);

    // Display all results in the result container
    document.getElementById('result').innerText =
        `${inputGreeting} ----- ${greetingLowerCase} ----- ${greetingUpperCase} ----- ${greetingWithW}  ----- ${reversedGreeting}`;
});