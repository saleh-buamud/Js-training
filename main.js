// Add click event listener to the submit button
document.getElementById('btn-getting').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const userWeight = document.getElementById('input-weight').value;
    const userHeight = document.getElementById('input-height').value;

    // Calculate BMI (Body Mass Index)
    const bmi = userWeight / (userHeight * userHeight);

    // Reference to result element
    const resultElement = document.getElementById('result');

    // Display BMI category
    if (bmi < 18.5) {
        resultElement.innerHTML = `${bmi} Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultElement.innerHTML = `${bmi} Normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultElement.innerHTML = `${bmi} Overweight`;
    } else {
        resultElement.innerHTML = `${bmi} Obesity`;
    }

    // switch (true) {
    //     case (bmi < 18.5):
    //         resultElement.innerHTML = `${bmi} Underweight`;
    //         break;
    //     case (bmi >= 18.5 && bmi <= 24.9):
    //         resultElement.innerHTML = `${bmi} Normal weight`;
    //         break;
    //     case (bmi >= 25 && bmi <= 29.9):
    //         resultElement.innerHTML = `${bmi} Overweight`;
    //         break;
    //     default:
    //         resultElement.innerHTML = `${bmi} Obesity`;
    // }
});

