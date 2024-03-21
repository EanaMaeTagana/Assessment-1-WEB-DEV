// Functions to play the audio for the soundboard. 
document.querySelectorAll('.box').forEach(button => { // Selects all the elements within the file that are classed as 'box'. 
    button.addEventListener('click', function() { // Goes over all the elements that are defined as 'box'. An event listener is also added that whenever clicked execute the code within the brackets. 
        const audioFileName = this.getAttribute('data-audio'); // Get the name of the audio file from the button's data attribute. 
        const audioFilePath = audioFileName; // This line assigns the value of audioFileName to audioFilePath. 
        const audio = new Audio(audioFilePath); // Create a new Audio object with the file name.
        audio.play(); // Initialises the playing of the audio. 
    });
});

// Functions to execute the text to audio. 
function textToAudio() { 
    let msg = document.getElementById("text-to-speech").value; // Get the text that was put into the html input field with the id 'text-to-speech'.
    let speech = new SpeechSynthesisUtterance(); // Create a new SpeechSynthesisUtterance object which is the artificial human speech.
    speech.lang = "en-US"; // Set the language of the speech.
    speech.text = msg; // Set the text that will be spoken.
    speech.volume = 1; // Set the volume of the speech.
    speech.rate = 1; // Set the speed of the speech.
    speech.pitch = 1; // Set the pitch of the speech.
    window.speechSynthesis.speak(speech); // Initialise the text to speech function.
}

// Function for the pagination.
document.addEventListener("DOMContentLoaded", function () { // An event listener that is triggered when the DOM content is loaded, which is the basic structure of the website loaded.
    const audioButtons = Array.from(document.querySelectorAll('.box')); // Convert NodeList of audio buttons to an array.
    const itemsPerPage = 9; // Define the number of audio buttons per page.
    let currentPage = 1; // Initialise the current page number.

// Get references to elements for pagination.
    const soundContainer = document.getElementById('soundContainer');
    const prevPageButton = document.querySelector('#pagination .arrow:first-child');
    const nextPageButton = document.querySelector('#pagination .arrow:last-child');

// Function to set the duration of audio files.
    function formatTime(duration) { // Calculates and formats the duration in seconds.
        const seconds = (duration % 60).toFixed(1); 
        return seconds + 's'; // Returns the duration with an added 's' to represent seconds.
    }

// Function to display audio buttons for the current page.
    function displayAudioButtons(page) {
        soundContainer.innerHTML = ''; // Clear the sound container.
        // Calculate the range of audio buttons to display.
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const displayedButtons = audioButtons.slice(startIndex, endIndex);

        // For each button, sets the duration displayed and appends it to the container.
        displayedButtons.forEach(button => {
            const audioFileName = button.getAttribute('data-audio');
            const audioFilePath = audioFileName;
            const audio = new Audio(audioFilePath);
            // Once the audio file metadata is loaded, this code will update the duration displayed.
            audio.onloadedmetadata = function() {
                const durationSpan = button.querySelector('.duration');
                durationSpan.textContent = formatTime(audio.duration);
            };
            soundContainer.appendChild(button);
        });

        // Shows or hides previous page button based on the current page.
        if (currentPage === 1) { 
            prevPageButton.style.display = 'none'; // If the current page is the first page, hide the previous page button.
        } else {
            prevPageButton.style.display = 'inline-block'; // If the current page is not the first page, show the previous page button.
        }

        // Shows or hides next page button based on the current page and total number of pages.
        const numPages = Math.ceil(audioButtons.length / itemsPerPage);
        if (currentPage === numPages || numPages === 0) {
            nextPageButton.style.display = 'none'; // If the current page is the last page or there are no pages, hide the next page button.
        } else {
            nextPageButton.style.display = 'inline-block'; // If the current page is not the last page and there are pages, show the next page button.
        }
    }

    // Function to navigate to the previous page of audio buttons.
    function prevPage() {
        if (currentPage > 1) {
            currentPage--; 
            displayAudioButtons(currentPage); // Display audio buttons for the previous page.
        }
    }

    // Function to navigate to the next page of audio buttons.
    function nextPage() {
        const numPages = Math.ceil(audioButtons.length / itemsPerPage);
        if (currentPage < numPages) {
            currentPage++;
            displayAudioButtons(currentPage); // Display audio buttons for the next page.
        }
    }

    // Event listeners for previous and next page buttons.
    prevPageButton.addEventListener('click', prevPage);
    nextPageButton.addEventListener('click', nextPage);

    // Display audio buttons for the initial/current page.
    displayAudioButtons(currentPage);
});
