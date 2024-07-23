// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.75); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 dollar is 146.26 yen, then 3.5 dollars should be (3.5 * 146.26)
    const expected = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91); // 1 dollar is 146.26 yen, then 3.5 dollar should be = (3.5 * 146.26)
})

test("One thousand yen should be 5.559105 GBP", function() {
    // Import the function from app.js
    const { fromYenToGBP } = require('./app.js');

    // Use the function like its supposed to be used
    const GBP = fromYenToGBP(3500);

    // If 1 Yen is 0.005559105 GBP, then 3500 Yen should be (3500 * 0.005559105)
    const expected = 3500 * 0.005559105; 
    
    // This is the comparison for the unit test
     expect(fromYenToGBP(3500)).toBe(19.46); // 1000 Yen is 5.559105431 dollars, then 3500 euros should be = (3500 * 5.559105431)
})