const a =500
console.log(a);

const b = new Number(a) // Number object is created using the Number constructor
console.log(b);

console.log(b.toString().length); // 3  it returns the length of the string representation of the number
console.log(b.toFixed(1)); // 500.0  it returns a string with 1 decimal place 


const c = 12345678901234567890n
console.log(c);
console.log(c + 1n); // 12345678901234567891n
console.log(c + BigInt(1)); // 12345678901234567891n
// console.log(c + BigInt(1.5)); // 12345678901234567891n
// console.log(c + BigInt(1.9)); // 12345678901234567891n

const otherNumber = 23.896 
console.log(otherNumber.toPrecision(4))    // 23.90  it returns a string with 4 significant digits
console.log(otherNumber.toPrecision(2))    // 24  it returns a string with 2 significant digits
console.log(otherNumber.toPrecision(1))    // 20  it returns a string with 1 significant digit
console.log(otherNumber.toPrecision(10))    // 0  it returns a string with 0 significant digits
// console.log(otherNumber.toPrecision(-1))   // 0  it returns a string with -1 significant digits

console.log(tolocaleString(1234567890)); // 1,234,567,890  it returns a string with the number formatted according to the locale


// +++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++

console.log(maths)    //  [Function: Math]  it returns the Math object
console.log(Math.abs(-5)); // 5  it returns the absolute value of -5
console.log(Math.ceil(5.1)); // 6  it returns the smallest integer greater than or equal to 5.1
console.log(Math.floor(5.9)); // 5  it returns the largest integer less than or equal to 5.9
console.log(Math.round(5.5)); // 6  it returns the value of 5.5 rounded to the nearest integer
console.log(Math.max(5, 10, 15)); // 15  it returns the largest value from the list of numbers
console.log(Math.min(5, 10, 15)); // 5  it returns the smallest value from the list of numbers
console.log(Math.random()); // 0.1234567890123456  it returns a random number between 0 and 1
console.log(Math.pow(2, 3)); // 8  it returns the value of 2 raised to the power of 3
console.log(Math.sqrt(16)); // 4  it returns the square root of 16
console.log(Math.abs(-5)); // 5  it returns the absolute value of -5

console.log(Math.sin(Math.PI / 2)); // 1  it returns the sine of PI/2
console.log(Math.cos(Math.PI)); // -1  it returns the cosine of PI
console.log(Math.tan(Math.PI / 4)); // 1  it returns the tangent of PI/4
console.log(Math.log(10)); // 2.302585092994046  it returns the natural logarithm of 10

console.log(Math.PI); // 3.141592653589793  it returns the value of PI
console.log(Math.E); // 2.718281828459045  it returns the value of E
console.log(Math.SQRT2); // 1.4142135623730951  it returns the value of square root of 2