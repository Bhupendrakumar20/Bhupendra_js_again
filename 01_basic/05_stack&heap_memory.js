//we are using the stack and heap memory in this code

//stack memory is used for storing ---> primitive data types and function calls,which means its copy will create which means when we chanegs the value its actuall value cant be changed


// while heap memory is used for storing -----> non-primitive data types (objects, arrays, functions, etc.) --> get te refence value in this ...
// which means when we changes the value its actually change the value in heap memory not in stack memory


//premetive example:
let a = 10; // stack memory (primitive data type)
let b = a; // stack memory (primitive data type) copy of a is created in stack memory

b = 20; // stack memory (primitive data type) b is changed to 20, but a is still 10
console.log(a); // 10 (a is still 10)
console.log(b); // 20 (b is changed to 20)
console.log(a === b); // false (a is not equal to b)


//non-premetive example:
let obj1 = { name: "John" }; // heap memory (non-primitive data type)
let obj2 = obj1; // heap memory (non-primitive data type) reference of obj1 is created in heap memory
obj2.name = "Doe"; // heap memory (non-primitive data type) obj2 is changed to "Doe", but obj1 is also changed to "Doe"
console.log(obj1); // { name: "Doe" } (obj1 is changed to "Doe")
console.log(obj2); // { name: "Doe" } (obj2 is changed to "Doe")
console.log(obj1 === obj2); // true (obj1 is equal to obj2)