// Task 2: Text Processing - Transform text (uppercase, replace, reverse)
// This task processes user input and shows different text transformations

// Get button and add click event
const button = document.getElementById("processBtn");

button.addEventListener("click", function () {
    // Get input text
    const inputText = document.getElementById("name").value.trim();

    // Validate input
    if (!inputText) {
        alert("Please enter some text!");
        return;
    }

    // Transform text in different ways
    const upperMessage = inputText.toUpperCase();
    const replacedMessage = inputText.replaceAll('o', 'y');
    const combinedMessage = `${upperMessage} ${replacedMessage}`;
    const reversedMessage = [...combinedMessage].reverse().join("");

    // Display results
    const outputHTML = `
        <strong>Uppercase Message:</strong> ${upperMessage} <br>
        <strong>Modified Message (o → y):</strong> ${replacedMessage} <br>
        <strong>Combined Message:</strong> ${combinedMessage} <br>
        <strong>Reversed Message:</strong> ${reversedMessage}
    `;

    document.getElementById("result").innerHTML = outputHTML;
    document.getElementById("name").value = "";
});

