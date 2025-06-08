
//function calculating BodaBoda 
function calculateBodaFare(distanceInKm) {  // Function definition
    const baseFare = 50;  //the base fare (KES 50 is charged no matter the distance)
    const chargePerKm = 15;  //Set the cost per kilometer (KES 15 per km)

    // Fare calculation
    const transportFare = distanceInKm * chargePerKm;  // Calculate the fare based on distance (distance × charge per km)
    const totalFare = baseFare + transportFare;  // Add's base fare and calculated transport fare to get total fare

    // Console Output 
    console.log("Uko kwote? Io ni " + distanceInKm + " km:"); // Display's the distance entered by the user
    console.log("Ukikalia Pikipiki: KES " + baseFare);  // Display's the base fare (minimum fee)
    console.log("Mpaka Uko: KES " + transportFare);  // Display's the charge for the entered distance
    console.log("Total: KES " + totalFare);  // Display's the total amount the user should pay
    console.log("Panda Pikipiki!");  // Friendly message that end's the output
}

// Prompt the user for distance
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"); // Ask's the user how far they are going in kilometers and prompts input
const distance = Number(input); // converts to a number the input enter by user/travellor 

// Validate input before proceeding and a valid number using a condition
if (!isNaN(distance) && distance >= 0) {
    calculateBodaFare(distance); // If valid, call the function and pass the distance as an argument
} else {
    console.log("Please enter a valid number for the distance in kilometers.");// If input is not valid (e.g. text, empty, or negative), show error message
}