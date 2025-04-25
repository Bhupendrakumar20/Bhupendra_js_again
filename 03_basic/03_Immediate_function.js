//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//An IIFE is a function that runs as soon as it is defined.
//It is a design pattern that helps to avoid "polluting the global scope".
//It is also used to create a private scope for variables and functions.
//The syntax for an IIFE is as follows:

(function() {
    // Your code here
    console.log("I am an IIFE");
})();
//The parentheses around the function definition are necessary to make it a function expression,
//and the parentheses at the end invoke the function


//You can also pass arguments to an IIFE:
(function(name) {
    console.log("Hello, " + name);
})("John");
//In this example, the IIFE takes a parameter name and logs a greeting to the console.
//The argument "John" is passed to the IIFE when it is invoked.

//IIFE can also return a value with arraow function syntax:
const result = ((a, b) => a + b)(5, 10);
console.log(result); // Output: 15
//In this example, the IIFE takes two parameters a and b, adds them together, and returns the result.
//The result is then stored in the variable result and logged to the console.

//with arrow function syntax simple example:
const greet = ((name) => {
    return `Hello, ${name}!`;
})("Alice");    
console.log(greet); // Output: Hello, Alice!
//In this example, the IIFE takes a parameter name and returns a greeting string.
//The argument "Alice" is passed to the IIFE when it is invoked, and the result is stored in the variable greet.