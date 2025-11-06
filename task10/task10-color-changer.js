// Task 10: Random Background Color Changer - Change background color randomly
// This task changes the background color every second when activated

// Get toggle button element
const toggleButton = document.getElementById("toggleBtn");

// Store interval ID
let colorChangeInterval = null;

// Track if color changing is active
let isColorChanging = false;

/**
 * Generate random HEX color
 * @returns {string} Random HEX color like "#a3f4c1"
 */
function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
}

/**
 * Start changing background color every second
 */
function startColorChange() {
    // Change body color every 1 second
    colorChangeInterval = setInterval(() => {
        document.body.style.backgroundColor = generateRandomColor();
    }, 1000);

    toggleButton.textContent = "Stop 🎯";
    isColorChanging = true;
}

/**
 * Stop changing background color
 * Reset background to white
 */
function stopColorChange() {
    clearInterval(colorChangeInterval);
    toggleButton.textContent = "Start Changing 🎨";
    isColorChanging = false;
    document.body.style.backgroundColor = "#ffffff";
    toggleButton.style.backgroundColor = "";
}

/**
 * Handle button click event
 * Toggle between start and stop color change
 */
function handleToggleClick() {
    // Change button color immediately when clicked
    toggleButton.style.backgroundColor = generateRandomColor();

    // Toggle between start and stop
    if (isColorChanging) {
        stopColorChange();
    } else {
        startColorChange();
    }
}

// Attach click event listener to toggle button
toggleButton.addEventListener("click", handleToggleClick);

