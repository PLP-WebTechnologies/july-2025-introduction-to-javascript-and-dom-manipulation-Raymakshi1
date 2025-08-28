/**
 * JavaScript Fundamentals Project
 */

// =================================================================
// Part 1: Variable Declarations and Conditionals
// =================================================================

// Declaring variables of different types
const userName = "Admin"; // String
let userLevel = 10;       // Number
let isLoggedIn = true;    // Boolean

// A conditional (if-else) statement to check user status
if (isLoggedIn && userLevel > 5) {
    console.log(`Welcome, ${userName}! You have high-level access.`);
} else if (isLoggedIn) {
    console.log(`Welcome, ${userName}! You have standard access.`);
} else {
    console.log("Access Denied. Please log in.");
}


// =================================================================
// Part 2: At least 2 Custom Functions
// =================================================================

/**
 * Creates a personalized greeting message.
 * @param {string} name - The name of the person to greet.
 * @returns {string} - A formatted greeting string.
 */
function createGreeting(name) {
    // Use a ternary operator as another conditional example
    const sanitizedName = name ? name : "Guest";
    return `Hello, <strong>${sanitizedName}</strong>! Welcome to the demonstration.`;
}

/**
 * Generates an HTML list from an array of items.
 * @param {string[]} items - An array of strings to turn into a list.
 * @returns {string} - An HTML unordered list.
 */
function generateItemList(items) {
    let listHTML = "<ul>";
    // This function uses a loop, which is also part of Part 3.
    for (const item of items) {
        listHTML += `<li>${item}</li>`;
    }
    listHTML += "</ul>";
    return listHTML;
}


// =================================================================
// Part 3: At least 2 Loop Examples
// =================================================================

// Example 1: A `for` loop to generate a countdown.
let countdownMessage = "<h3>Countdown:</h3><p>";
for (let i = 5; i > 0; i--) {
    countdownMessage += `${i}... `;
}
countdownMessage += "Blast off! 🚀</p>";
console.log("For loop complete."); // Logs to console

// Example 2: A `for...of` loop (used inside the generateItemList function above).
// Here is another example with a `while` loop for demonstration.
const fruits = ["Apple", "Banana", "Cherry"];
let fruitMessage = "<h3>Fruits (from while loop):</h3><p>";
let j = 0;
while (j < fruits.length) {
    fruitMessage += `${fruits[j]} `;
    j++;
}
fruitMessage += "</p>";
console.log("While loop complete."); // Logs to console


// =================================================================
// Part 4: At least 3 DOM Interactions
// =================================================================

// 1. Selecting elements from the DOM
const actionButton = document.getElementById("actionButton");
const nameInput = document.getElementById("nameInput");
const outputArea = document.getElementById("outputArea");

// 2. Adding an event listener to the button
actionButton.addEventListener("click", () => {
    // 3. Getting a value from an input and updating the DOM's innerHTML
    const visitorName = nameInput.value;
    
    // Call our custom functions
    const greeting = createGreeting(visitorName);
    const itemMessage = generateItemList(["Variables", "Functions", "Loops", "DOM"]);

    // Update the content of the output area on the webpage
    outputArea.innerHTML = `
        ${greeting}
        <hr>
        ${countdownMessage}
        <hr>
        <h3>Things demonstrated:</h3>
        ${itemMessage}
    `;
});