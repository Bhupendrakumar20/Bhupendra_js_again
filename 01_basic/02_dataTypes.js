"use strict" //treat all the JS code as newer version

//note: use strict mode to avoid using undeclared variables and other errors
//note: alert(3+3) it will show 6 in a pop up box in browser mode not in node.js

//JS is a dynamic language, so we don't have to specify the data type of the variable.

// In JS, we have 7 primitive data types and 1 non-primitive data type.
// Primitive data types are immutable, meaning their values cannot be changed once created.
// Non-primitive (reference type) data types are mutable, meaning their values can be changed.


// Primitive data types are:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined (Undefined is a special value that indicates that a variable has been declared but has not yet been assigned a value.)
// 5. Null (Null is a standalone value ,special value that represents the absence of any value or object.)
// 6. Symbol (ES6)  (Symbol is a unique and immutable primitive value that can be used as the key of an object property. It is often used to create private properties or methods in objects.)
// 7. BigInt (ES11)


// Non-primitive data type is:
// 1. Object
// 2. Array (which is a special type of object)
// 3. Function (which is also a special type of object)
// 4. Date (which is also a special type of object)
// 5. RegExp (which is also a special type of object)
// 6. Error (which is also a special type of object)
// 7. Map (which is also a special type of object)
// 8. Set (which is also a special type of object)

console.log(typeof 3); //number
console.log(typeof 3.14); //number
console.log(typeof null); //object (this is a bug in JS, null is not an object)
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof Symbol("hello")); //symbol
console.log(typeof BigInt(123456789012345678901234567890)); //bigint
console.log(typeof {}); //object
console.log(typeof []); //object (array is a special type of object)
console.log(typeof function(){}); //function (function is a special type of object)
console.log(typeof new Date()); //object (date is a special type of object)
console.log(typeof /hello/); //object (regexp is a special type of object)
console.log(typeof new Error()); //object (error is a special type of object)
console.log(typeof new Map()); //object (map is a special type of object)
console.log(typeof new Set()); //object (set is a special type of object)
console.log(typeof new WeakMap()); //object (weakmap is a special type of object)
console.log(typeof new WeakSet()); //object (weakset is a special type of object)
console.log(typeof new Array()); //object (array is a special type of object)
console.log(typeof new Object()); //object (object is a special type of object)

//non premetieve data type 
//array:
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr[0]); // 1

//object:
const obj = { name: "John", age: 30 };
console.log(obj); // { name: "John", age: 30 }
console.log(obj.name); // John
console.log(obj["age"]); // 30
console.log(obj["name"]); // John

//fucntion:
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
console.log(typeof add); // function
console.log(add instanceof Function); // true
