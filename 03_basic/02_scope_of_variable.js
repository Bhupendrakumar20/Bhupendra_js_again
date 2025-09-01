//scope of variable
// 1. Global scope
// 2. Local scope
// 3. Block scope
// 4. Function scope
// 5. Lexical scope
// 6. Dynamic scope
// 7. Module scope
// 8. Closure scope                                                                              


//1. global scope
// Global scope refers to variables that are declared outside of any function or block. These variables are accessible from anywhere in the code, including inside functions and blocks.
// Global scope is created when a variable is declared outside of any function or block. Variables declared with var, let, and const outside of any function or block are global variables.
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Also accessible







// 2. Local scope
// Local scope refers to variables that are declared within a function or block. These variables are only accessible within that function or block and cannot be accessed from outside.
// Local scope is created when a function is invoked or a block is entered. Variables declared with var, let, and const inside a function or block are local to that function or block.
function testLocal() {
    let localVar = "I am local";
    console.log(localVar); // Accessible here
}
testLocal();
console.log(localVar); //  Error: localVar is not defined





// 3. Block scope
// Block scope refers to variables that are declared within a block (enclosed by curly braces {}). These variables are only accessible within that block and cannot be accessed from outside.
// Block scope is created when a block is entered. Variables declared with let or const inside {} are only accessible within that block.
{
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible
}
console.log(blockVar); //  Error: blockVar is not defined




// 4. Function scope
// Function scope refers to variables that are declared within a function. These variables are only accessible within that function and cannot be accessed from outside.
// Function scope is created when a function is invoked. Variables declared with var, let, and const inside a function are local to that function.
function testFunction() {
    if (true) {
        var functionVar = "I am function scoped";
    }
    console.log(functionVar); // Accessible, because 'var' ignores block scope
}
testFunction();
console.log(functionVar); //  Error: functionVar is not defined



function testfunction2(){
    if(true){
        let functionVar2 = "I am function scoped with let";
    }
    console.log(functionVar2); //  Error: functionVar2 is not defined
}
testfunction2();
console.log(functionVar2); //  Error: functionVar2 is not defined



//important note
// In JavaScript, variables declared with var have function scope, while variables declared with let and const have block scope. This means that if you declare a variable with var inside a block, it will still be accessible outside that block, while variables declared with let and const will not be accessible outside the block.
// This is a key difference between var and let/const in terms of scope.
// It is generally recommended to use let and const instead of var to avoid issues with variable scope and hoisting. Using let and const helps to create more predictable and maintainable code, as they have block scope and do not allow redeclaration within the same scope.




// 5. Lexical scope
// Lexical scope refers to the scope of variables that are defined within a function or block. It determines how variable names are resolved in nested functions. In JavaScript, functions are lexically scoped, meaning that they can access variables from their own scope and the scope of their parent functions.
//which means that : Inner functions can access variables defined in their outer (parent) functions.
function outer() {
    let outerVar = "I am from outer function";
    function inner() {
        console.log(outerVar); // Accessible due to lexical scope
    }
    inner();
}
outer();




    // 6. Dynamic scope
// Dynamic scope refers to the scope of variables that are determined at runtime based on the call stack. In JavaScript, dynamic scoping is not used, and all variables are lexically scoped. This means that the scope of a variable is determined by its position in the source code, not by the call stack.      
// This is a key difference between dynamic scoping and lexical scoping. In dynamic scoping, the scope of a variable is determined by the call stack, while in lexical scoping, the scope of a variable is determined by its position in the source code.
// In JavaScript, all variables are lexically scoped, meaning that they can only be accessed from their own scope and the scope of their parent functions. This is a key feature of JavaScript and helps to create more predictable and maintainable code.

function showVar() {
    console.log(this.variable);
}

let obj1 = { variable: "I am obj1", show: showVar };
let obj2 = { variable: "I am obj2", show: showVar };

obj1.show(); // I am obj1
obj2.show(); // I am obj2

// Note: In JavaScript, dynamic scoping is not used, and all variables are lexically scoped. This means that the scope of a variable is determined by its position in the source code, not by the call stack.
// This is a key difference between dynamic scoping and lexical scoping. In dynamic scoping, the scope of a variable is determined by the call stack, while in lexical scoping, the scope of a variable is determined by its position in the source code.




// 7. Module scope
// Module scope refers to the scope of variables that are defined within a module. In JavaScript, modules are files that contain code that can be imported and exported. Variables declared within a module are only accessible within that module and cannot be accessed from outside.
    // Example of module scope
    // In this example, we will create a module that exports a function and a variable.
    // module.js
    export const moduleVar = "I am a module variable"; // Module scope
    export function moduleFunction() {
        console.log(moduleVar); // Output: I am a module variable
    }
    // main.js
    import { moduleVar, moduleFunction } from "./module.js"; // Import the module
    console.log(moduleVar); // Output: I am a module variable
    moduleFunction(); // Call the function to see the output
    // Output: I am a module variable



    // NOTE :
    //if you declare a function and store it in a variable, the function will be hoisted to the top of the scope. This means that you can call the function before it is declared in the code. However, if you declare a variable and store a value in it, the variable will not be hoisted to the top of the scope. 
    // This means that you cannot access the variable before it is declared in the code.


    // LIKEWISE :
    //  a = function hoistedFunction() {
    // return("I am a hoisted function"); // Output: I am a hoisted function
    // }
    // console.log(a()); // Output: I am a hoisted function //this is good 



    //print before declaration
    // console.log(b)
    // b = function second_hoistedFunction() {
    // return("I am a hoisted function"); // Output: I am a hoisted function
    // }    
    // Error: Cannot access 'b' before initialization
