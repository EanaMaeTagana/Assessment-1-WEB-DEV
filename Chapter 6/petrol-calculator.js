document.getElementById('calculateButton').addEventListener('click', function() { // Added an event listenter to the button 'calculate' that whenever clicked executes the code.
    const petrolCost = parseFloat(document.getElementById('petrolCost').value); // Retrieves the petrol cost, as entered by the user, and turns it into a floating-point number.
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value); // Retrieves the liters purchased, as entered by the user, and turns it into a floating-point number.
    const totalCostDisplay = document.getElementById('overallValue'); // Gets the element where the total cost, when calculated, will be displayed.
    
    // Function to calculate the toal cost of the petrol by multiplying the cost by the liter. Then, converts the output to a string with two decimal places and updates the displayed total cost.
    totalCostDisplay.textContent = (petrolCost * litersPurchased).toFixed(2); 
});