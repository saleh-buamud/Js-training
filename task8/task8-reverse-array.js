// Task 8: Reverse Array Function - Manually reverse an array without using reverse()
// This task creates a function that reverses an array by looping from end to start

/**
 * Reverse an array manually
 * @param {Array} array - The array to reverse
 * @returns {Array} - New reversed array
 */
function reverseArray(array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    let reversedArray = [];

    // Loop from last element to first
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

// Example usage
let array = [10, 'test', 7, true, 5];

console.log("Original Array:", array);
console.log("Reversed Array:", reverseArray(array));
console.log("Original Array remains intact:", array);

