//function in javascript
// function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!




// function expression
const greet2 = function(name) {
    console.log("Hello, " + name + "!");
}
greet2("Bob"); // Output: Hello, Bob!




// arrow function
const greet3 = (name) => {
    console.log("Hello, " + name + "!");
}
greet3("Charlie"); // Output: Hello, Charlie!




// function with default parameters
function greet4(name = "John") {
    console.log("Hello, " + name + "!");
}
greet4(); // Output: Hello, John!
greet4("David"); // Output: Hello, David!




// function with rest parameters
function greet5(...names) {
    for (let name of names) {
        console.log("Hello, " + name + "!");
    }
}
greet5("Eve", "Frank", "Grace"); // Output: Hello, Eve! Hello, Frank! Hello, Grace!
// // function with rest parameters and arrow function




// function with spread operator
function greet6(...names) {
    const greeting = names.map(name => "Hello, " + name + "!").join(" ");
    console.log(greeting);
}