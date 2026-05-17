// "5" is a string, but subtraction automatically converts it into a number.
// This is an example of implicit type conversion.
let result = "5" - 2;

console.log("The result is: " + result);


// Boolean("false") becomes true because non-empty strings are truthy in JavaScript.
// We compare the string directly to make the logic more accurate.
let isValid = "false" === "true";

if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!");
}


// age is stored as a string.
// Number() explicitly converts the string into a number before addition.
let age = "25";

let totalAge = Number(age) + 5;

console.log("Total Age: " + totalAge);


// ----- Type Conversion Examples -----

// Implicit type conversion example
// JavaScript automatically converts the number into a string.
let implicitExample = "Score: " + 100;

console.log("Implicit Conversion Example:");
console.log(implicitExample);
console.log(typeof implicitExample);


// Explicit type conversion example
// Number() manually converts the string into a number.
let stringNumber = "50";

console.log("Before explicit conversion:", stringNumber);
console.log("Type before:", typeof stringNumber);

let convertedNumber = Number(stringNumber);

console.log("After explicit conversion:", convertedNumber);
console.log("Type after:", typeof convertedNumber);


// Edge case example using undefined
let missingValue;

console.log("Before converting undefined:", missingValue);
console.log("Type before:", typeof missingValue);

// Number(undefined) becomes NaN (Not a Number)
let convertedMissingValue = Number(missingValue);

console.log("After converting undefined:", convertedMissingValue);
console.log("Type after:", typeof convertedMissingValue);