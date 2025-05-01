//iteration
// 1. Using for loop
// 2. Using for...of loop
// 3. Using for...in loop
// 4. Using forEach loop
// 5. Using map loop
// 6. Using filter loop
// 7. Using reduce loop
// 8. Do while loop
// 9. While loop


//1. for loop :
// The for loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition.
//syntax:
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// In this example, the for loop starts with i = 0 and continues to execute as long as i is less than 5.



//2. for...of loop :
// The for...of loop is a modern way to iterate over iterable objects like arrays, strings, and maps.
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit); // prints each fruit
}
// In this example, the for...of loop iterates over each element in the iterable object and executes the code block for each element.
// The for...of loop is more concise and easier to read than the traditional for loop, especially when working with arrays or other iterable objects.


//3. for...in loop :
// The for...in loop is used to iterate over the properties of an object. It is not recommended for arrays, as it may not iterate in the order you expect.
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]); // prints each property and its value
}
// In this example, the for...in loop iterates over each property in the object and executes the code block for each property.



//4. forEach loop :
// The forEach loop is a method available on arrays that allows you to execute a function for each element in the array.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number); // prints each number
});
// In this example, the forEach method is called on the numbers array, and the provided function is executed for each element in the array.



//5. map loop :
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers2 = [1, 2, 3, 4, 5];
let squares = numbers2.map(function(number) {
  return number * number; // returns the square of each number
});
console.log(squares); // Output: [1, 4, 9, 16, 25]
// In this example, the map method is called on the numbers2 array, and the provided function returns the square of each number. The result is stored in the squares array.


// 6. filter loop :
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(function(number) {
  return number % 2 === 0; // returns only even numbers
});
console.log(evenNumbers); // Output: [2, 4]
// In this example, the filter method is called on the numbers3 array, and the provided function returns only even numbers. The result is stored in the evenNumbers array.


// 7. reduce loop :
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue; // returns the sum of all numbers
}, 0); // initial value is 0
console.log(sum); // Output: 15
// In this example, the reduce method is called on the numbers4 array, and the provided function returns the sum of all numbers. The result is stored in the sum variable.


// 8. do while loop :
// The do while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false.
let i = 0;
do {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}
while (i < 5);
// In this example, the do while loop starts with i = 0 and continues to execute
// as long as i is less than 5. The code block is executed at least once, even if the condition is false.
// The do while loop is useful when you want to ensure that the code block is executed at least once, regardless of the condition.


// 9. while loop :
// The while loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition.
// The while loop checks the condition before executing the code block, so if the condition is false at the start, the code block will not be executed at all.
let j = 0;
while (j < 5) {
  console.log(j); // Output: 0, 1, 2, 3, 4
  j++;
}
// In this example, the while loop starts with j = 0 and continues to execute as long as j is less than 5. The code block is executed
// as long as the condition is true. The while loop is useful when you want to execute a code block repeatedly until a certain condition is met.
// The while loop is often used when the number of iterations is not known in advance, and you want to keep executing the code block until a certain condition is met.
// The while loop is a fundamental control flow statement in JavaScript and is widely used in various programming scenarios.
// It is important to ensure that the condition will eventually become false, otherwise, the loop will run indefinitely and may cause the program
// to crash or hang. To avoid infinite loops, you can use a counter variable or other mechanisms to ensure that the loop will eventually terminate.