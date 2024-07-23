// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return parseFloat(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 146.26;
    // return the Yen value
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToGBP = function(valueInYen) {
    // Convert the given valueInYen to GBP
    let valueInGBP = valueInYen * 0.005559105;
    // return the GBP value
    return parseFloat(valueInGBP.toFixed(2));
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToGBP};