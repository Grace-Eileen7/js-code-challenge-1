// This function calculates the mobile money transaction fee
function estimateTransactionFee() {

    const input = prompt("Enter amount wish to send KES):"); // Ask the user how much money they want to send

    const amountToSend = Number(input); // Convert the input from text to a number

    if (isNaN(amountToSend) || amountToSend <= 0) {  // Check if the input is a valid positive number
        console.log("Please enter amount from 1ksh and above!.");
        return; // Stop running the function if invalid input
    }

    // Defining the fee rules
    const feepercent = 0.015; // 1.5% fee
    const minFee = 10;     // Minimum fee is KES 10
    const maxFee = 70;     // Maximum fee is KES 70

    let fee = amountToSend * feepercent; // Calculate the fee based on the rate

    // If the fee is less than minimum, set fee to minimum
    if (fee < minFee) {
        fee = minFee;
    }

    // If the fee is more than maximum, set fee to maximum
    if (fee > maxFee) {
        fee = maxFee;
    }

    // Calculate's total amount to be debited (amount + fee)
    const totalAmount = amountToSend + fee;

    // The results will be printed to the user in a friendly way
    console.log("Sending KES " + amountToSend);
    console.log("Calculated Transaction Fee: KES " + fee);
    console.log("Total amount to be debited: KES " + totalAmount);
    console.log("\n Send Money Securely!");
}

// Call the function to run the estimator
estimateTransactionFee();
