// This function waits for the HTML page to load completely before running the code
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript file successfully loaded and connected!");

    // 1. Select the elements we want to interact with
    const heading = document.querySelector("h1");
    const changeTextBtn = document.getElementById("changeTextBtn");

    // 2. Add an event listener to the button
    // This listens for a 'click' and then runs the code inside the curly braces
    changeTextBtn.addEventListener("click", () => {
        // Change the text content of the main heading
        heading.textContent = "The JavaScript Works! 🎉";
        
        // Change the text color of the heading
        heading.style.color = "#007BFF";

        // Log a message to the browser console for debugging
        console.log("The user clicked the button, and the heading changed!");
    });
});
