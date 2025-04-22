//scope of variable
// 1. Global scope
// 2. Local scope
// 3. Block scope
// 4. Function scope
// 5. Lexical scope
// 6. Dynamic scope
// 7. Module scope
// 8. Closure scope                                                                              

function globalScope() {
    var globalVar = "I am a global variable"; // Global scope
    let globalLetVar = "I am a global let variable"; // Global scope
    const globalConstVar =
        "I am a global const variable"; // Global scope
    console.log(globalVar); // Output: I am a global variable
    console.log(globalLetVar); // Output: I am a global let variable
    console.log(globalConstVar); // Output: I am a global const variable
}
globalScope(); // Call the function to see the output
// Output: I am a global variable
// Output: I am a global let variable
// Output: I am a global const variable


// 2. Local scope
// Local scope refers to variables that are declared within a function or block. These variables are only accessible within that function or block and cannot be accessed from outside.
// Local scope is created when a function is invoked or a block is entered. Variables declared with var, let, and const inside a function or block are local to that function or block.
    function localScope() {
        var localVar = "I am a local variable"; // Local scope
        let localLetVar = "I am a local let variable"; // Local scope
        const localConstVar =
            "I am a local const variable"; // Local scope
        console.log(localVar); // Output: I am a local variable
        console.log(localLetVar); // Output: I am a local let variable
        console.log(localConstVar); // Output: I am a local const variable
    }
    localScope(); // Call the function to see the output
    // Output: I am a local variable
    // Output: I am a local let variable
    // Output: I am a local const variable

    // console.log(localVar); // Error: localVar is not defined
    // console.log(localLetVar); // Error: localLetVar is not defined
    // console.log(localConstVar); // Error: localConstVar is not defined




    // 3. Block scope
// Block scope refers to variables that are declared within a block (enclosed by curly braces {}). These variables are only accessible within that block and cannot be accessed from outside.
// Block scope is created when a block is entered. Variables declared with let and const inside a block are local to that block.
    if (true) {
        var blockVar = "I am a block variable"; // Block scope
        let blockLetVar = "I am a block let variable"; // Block scope
        const blockConstVar =
            "I am a block const variable"; // Block scope
        console.log(blockVar); // Output: I am a block variable
        console.log(blockLetVar); // Output: I am a block let variable
        console.log(blockConstVar); // Output: I am a block const variable
    }
    console.log(blockVar); // Output: I am a block variable
    // console.log(blockLetVar); // Error: blockLetVar is not defined
    // console.log(blockConstVar); // Error: blockConstVar is not defined

    // 4. Function scope
// Function scope refers to variables that are declared within a function. These variables are only accessible within that function and cannot be accessed from outside.
// Function scope is created when a function is invoked. Variables declared with var, let, and const inside a function are local to that function.
    function functionScope() {
        var functionVar = "I am a function variable"; // Function scope
        let functionLetVar = "I am a function let variable"; // Function scope
        const functionConstVar =
            "I am a function const variable"; // Function scope
        console.log(functionVar); // Output: I am a function variable
        console.log(functionLetVar); // Output: I am a function let variable
        console.log(functionConstVar); // Output: I am a function const variable
    }
    functionScope(); // Call the function to see the output
    // Output: I am a function variable
    // Output: I am a function let variable     
    // Output: I am a function const variable

    // console.log(functionVar); // Error: functionVar is not defined
    // console.log(functionLetVar); // Error: functionLetVar is not defined
    // console.log(functionConstVar); // Error: functionConstVar is not defined

    //important note
// In JavaScript, variables declared with var have function scope, while variables declared with let and const have block scope. This means that if you declare a variable with var inside a block, it will still be accessible outside that block, while variables declared with let and const will not be accessible outside the block.
// This is a key difference between var and let/const in terms of scope.
// It is generally recommended to use let and const instead of var to avoid issues with variable scope and hoisting. Using let and const helps to create more predictable and maintainable code, as they have block scope and do not allow redeclaration within the same scope.

// 5. Lexical scope
// Lexical scope refers to the scope of variables that are defined within a function or block. It determines how variable names are resolved in nested functions. In JavaScript, functions are lexically scoped, meaning that they can access variables from their own scope and the scope of their parent functions.
    function outerFunction() {
        var outerVar = "I am an outer variable"; // Outer scope
        function innerFunction() {
            var innerVar = "I am an inner variable"; // Inner scope
            console.log(outerVar); // Output: I am an outer variable
            console.log(innerVar); // Output: I am an inner variable
        }
        innerFunction(); // Call the inner function to see the output
    }
    outerFunction(); // Call the outer function to see the output
    // Output: I am an outer variable
    // Output: I am an inner variable

    // 6. Dynamic scope
// Dynamic scope refers to the scope of variables that are determined at runtime based on the call stack. In JavaScript, dynamic scoping is not used, and all variables are lexically scoped. This means that the scope of a variable is determined by its position in the source code, not by the call stack.      
// Dynamic scoping is not a feature of JavaScript, and all variables are lexically scoped. This means that the scope of a variable is determined by its position in the source code, not by the call stack. In JavaScript, functions are lexically scoped, meaning that they can access variables from their own scope and the scope of their parent functions.
// This is a key difference between dynamic scoping and lexical scoping. In dynamic scoping, the scope of a variable is determined by the call stack, while in lexical scoping, the scope of a variable is determined by its position in the source code.
// In JavaScript, all variables are lexically scoped, meaning that they can only be accessed from their own scope and the scope of their parent functions. This is a key feature of JavaScript and helps to create more predictable and maintainable code.

function dynamicScope() {
    var dynamicVar = "I am a dynamic variable"; // Dynamic scope
    function innerFunction() {
        console.log(dynamicVar); // Output: I am a dynamic variable
    }
    innerFunction(); // Call the inner function to see the output
}
dynamicScope(); // Call the outer function to see the output
// Output: I am a dynamic variable
// Note: In JavaScript, dynamic scoping is not used, and all variables are lexically scoped. This means that the scope of a variable is determined by its position in the source code, not by the call stack.
// This is a key difference between dynamic scoping and lexical scoping. In dynamic scoping, the scope of a variable is determined by the call stack, while in lexical scoping, the scope of a variable is determined by its position in the source code.
// In JavaScript, all variables are lexically scoped, meaning that they can only be accessed from their own scope and the scope of their parent functions. This is a key feature of JavaScript and helps to create more predictable and maintainable code.