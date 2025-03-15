// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Variables
    let testText = 'The quick brown fox jumps over the lazy dog.';
    let startTime, endTime;

    // Get the button and other elements
    const button = document.getElementById('btn');
    const inputTextArea = document.getElementById('input-text');
    const userInputTextArea = document.getElementById('user-input');
    const outputDiv = document.querySelector('.output');

    // Add event listener to the button
    button.addEventListener('click', function () {
        if (button.innerText === 'Start Test') {
            startTest();
        } else {
            endTest();
        }
    });

    // Functions
    function startTest() {
        // Set the text for the test
        inputTextArea.value = testText;

        // Clear results
        outputDiv.innerHTML = 'Test results display here..';

        // Record the start time
        startTime = new Date().getTime();

        // Change button text
        button.innerHTML = 'End Test';

        // Enable user input and clear previous input
        userInputTextArea.readOnly = false;
        userInputTextArea.value = '';
        userInputTextArea.focus(); // Focus on the input area for typing
    }

    function endTest() {
        // Record the end time
        endTime = new Date().getTime();

        // Disable user input
        userInputTextArea.readOnly = true;

        // Calculate time elapsed in seconds
        const timeElapsed = (endTime - startTime) / 1000; // Convert milliseconds to seconds

        // Get the user's typed text
        const userTypedText = userInputTextArea.value;

        // Split the text to count words
        const typedWords = userTypedText.split(/\s+/).filter(function (word) {
            return word !== '';
        }).length;

        // Calculate words per minute (WPM)
        let wpm = 0;
        if (timeElapsed > 0) {
            wpm = Math.round((typedWords / timeElapsed) * 60); // Words per minute
        }

        // Display results
        outputDiv.innerHTML = `Time = ${timeElapsed.toFixed(2)} seconds, Words Typed = ${typedWords}, WPM = ${wpm}`;

        // Reset the button
        button.innerText = 'Start Test';
    }
});