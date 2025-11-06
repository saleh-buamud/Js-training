// Task 3: BMI Calculator - Calculate Body Mass Index
// This task calculates BMI from weight and height, then categorizes the result

document.getElementById("Btn").addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Validate input
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    // Calculate BMI
    const heightM = height / 100;
    const BMI = (weight / (heightM * heightM)).toFixed(2);

    // Determine BMI category
    let category = "";
    if (BMI < 18.5) category = "Underweight";
    else if (BMI < 25) category = "Normal weight";
    else if (BMI < 30) category = "Overweight";
    else category = "Obese";

    // Display result
    document.getElementById("bmiResult").innerHTML =
        `Your BMI is: <strong>${BMI}</strong> (${category})`;
});

