document.querySelectorAll('.box').forEach(button => { // Selects all the elements within the file that are classed as 'box'. 
    button.addEventListener('click', function() { // Goes over all the elements that are defined as 'box'. An event listener is also added that whenever clicked execute the code within the brackets. 
        const audioFileName = this.getAttribute('data-audio'); // Within the click event function, this line retrieves the value of the "data-audio" that is listed within the html. 
        const audioFilePath = audioFileName; // This line assigns the value of audioFileName to audioFilePath. 
        const audio = new Audio(audioFilePath); // A new audio is created with the same path as audioFilePath. 
        audio.play(); // Initialises the playing of the audio. 
    });
});