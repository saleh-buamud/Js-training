// Task 5: Vowel Filter - Filter out vowels from input text
// This task removes vowels (A, E, I, O, U) and displays only consonants

document.getElementById("addtext").addEventListener("click", function () {
    // Get input text
    const inputText = document.getElementById("text-input").value.trim();
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const showEl = document.getElementById("show");

    // Validate input
    if (inputText === "") {
        alert("Please enter a letter or word!");
        return;
    }

    // Clear previous results
    showEl.innerHTML = "";

    // Loop through characters and filter out vowels
    for (let i = 0; i < inputText.length; i++) {
        const currentChar = inputText[i].toUpperCase();

        // Display only non-vowel characters
        if (!vowels.includes(currentChar)) {
            showEl.innerHTML += `<div style="color:red;">${inputText[i]}</div>`;
        }
    }

    // Clear input field
    document.getElementById("text-input").value = "";
});

