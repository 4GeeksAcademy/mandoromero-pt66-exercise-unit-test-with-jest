// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))



// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInYen to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the Yen value
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
 // Convert the given valueInYen to Pound
    let valueInPound = valueInYen *.87 ;
    // return the Pound value
    return valueInPound;
}






// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound};