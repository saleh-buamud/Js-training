// Array containing all student names
const studentNames = ['Saleh', 'Noor', 'Mohamed', 'Mona', 'Hana'];

// Flag to indicate if the searched student was found
let isStudentFound = false;

// Display all student names separated by dashes
document.getElementById('studentName').innerHTML = studentNames.join(' --- ') + '<br>';

// Add click event listener to the search button
document.getElementById('buttonSearch').addEventListener('click', function () {
    // Get the value entered by the user in the search input
    const searchInput = document.getElementById('searchInput').value;

    // Convert the input to lowercase for case-insensitive comparison
    const searchInputLowerCase = searchInput.toLowerCase();

    // Loop through the student names array to check for a match
    for (let i = 0; i < studentNames.length; i++) {
        // Compare each student name (in lowercase) with the search input
        if (searchInputLowerCase === studentNames[i].toLowerCase()) {
            isStudentFound = true;
            break;
        }
    }

    // Display result based on whether the student was found or not
    if (!isStudentFound) {
        document.getElementById('result').innerHTML = 'NOT found';
    } else {
        document.getElementById('result').innerHTML = 'FOUND';
    }

    // Reset the flag for the next search
    isStudentFound = false;

    // Clear the search input field
    document.getElementById('add').value = '';
});