function calculateChaiIngredients(numberOfCups) {
    const water = 200; // ml per cup
    const milk = 50; // ml per cup
    const tea = 1; // tablespoon per cup
    const sugar = 2; // teaspoons per cup

    const totalWater = water * numberOfCups; // To Calculate total water needed for all cups
    const totalMilk = milk * numberOfCups; // Calculating total milk needed for the cups
    const totalTea = tea * numberOfCups; //calculating tatal teaspoons needed for the cups
    const totalSugar = sugar * numberOfCups; // Calculating total teaspoons of Sugar need for the cups

    //Display total ingredient amounts/measurements based on the user input
    console.log("To make " + numberOfCups + " cups of Kenyan Chai, you will need:");
    console.log("Water: " + totalWater + " ml");  //water in ml
    console.log("Milk: " + totalMilk + " ml");  //water in ml
    console.log("Tea Leaves (Majani): " + totalTea + " tablespoons");  //Tea in tbsp
    console.log("Sugar (Sukari): " + totalSugar + " teaspoons");  //in tsp
    console.log("Enjoy your Chai Bora!");  //final message
}

// Ask(ing) the user how many cups they want
let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
let cups = Number(userInput);

// Check('s) if it's a valid number
if (isNaN(cups) || cups <= 0) {
    console.log("Please enter a valid number for cups, from 1 and above!.");
} else {
    calculateChaiIngredients(cups); // Call(ing) the function with the user input if enterted positive number 1 and above.
}
