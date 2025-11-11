// ...existing code...
/*
  This file contains the interaction logic for ddd.html (Task 12).
  It handles the submit button, renders the list of names and shows a preview on mouse leave.
*/

// Get elements from the DOM
const input = document.getElementById("inputValue");
const outputDiv = document.getElementById("output");
const show = document.getElementById("show");
const submitButton = document.getElementById("submitButton");

// Array to store submitted names
let list = [];

/*
  On submit button click:
  - trim the input
  - ignore empty input
  - push name to the list
  - re-render the output area with greeting headings for each name
  - clear the input field
*/
submitButton.addEventListener("click", function () {
    const inputText = input.value.trim();
    if (inputText === "") return; // do nothing if input is empty

    list.push(inputText);

    // clear the output area then display each name as <h1>
    outputDiv.innerHTML = "";
    list.forEach(name => {
        const h1 = document.createElement("h1");
        // use textContent to avoid XSS
        h1.textContent = `مرحبا ${name}`;
        outputDiv.appendChild(h1);
    });

    // clear the input field after adding
    input.value = "";
});

/*
  On mouseleave from the input:
  - take trimmed text and append a paragraph to #show as a preview
  - do nothing when the field is empty
*/
input.addEventListener("mouseleave", function () {
    const inputText = this.value.trim();
    if (inputText === "") return;

    const p = document.createElement("p");
    p.textContent = inputText; // safe insertion
    show.appendChild(p);
});

/*
  On mouseenter into the input:
  - clear previous preview content in #show
*/
input.addEventListener("mouseenter", function () {
    show.innerHTML = "";
});
// ...existing code...