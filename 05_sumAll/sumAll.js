const sumAll = function (x, y) {
    // Validate inputs: check if x or y are not numbers, are negative, or are not integers
    if (
        typeof x !== 'number' || 
        typeof y !== 'number' || 
        x < 0 || 
        y < 0 || 
        !Number.isInteger(x) || 
        !Number.isInteger(y)
    ) {
        return "ERROR"; // Return "ERROR" for invalid inputs
    }

    // Ensure x is the smaller number
    if (x > y) [x, y] = [y, x];

    // Calculate the sum of numbers from x to y
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }

    return sum; // Return the computed sum
};

// Do not edit below this line
module.exports = sumAll;
