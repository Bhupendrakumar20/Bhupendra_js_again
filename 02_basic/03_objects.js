//literals are the most common way to create objects --> dont creates the singletons
// while creating the object we can use the new keyword or we can use the object literal notation
//while using the constructor function we get the singleton object

//what is singleton object?
//A singleton object is an object that can only have one instance. It is used to create a single instance of a class and provide a global point of access to it.


const person = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(person); // { name: 'John', age: 30, city: 'New York' }  it returns the object with the properties name, age and city
console.log(person.name); // John  it returns the value of the property name
console.log(person["age"]); // 30  it returns the value of the property age
console.log(person["city"]); // New York  it returns the value of the property city



//Q. what about when we required to store the symbol as a key in the object
const sym = Symbol("sym")
const obj = {
    [sym]: "value" // you have to store the key of that symbol in the square brackets ... it is used to create a computed property name
}
console.log(obj); // { [Symbol(sym)]: 'value' }  it returns the object with the symbol as a key and value as value
console.log(obj[sym]); // value  it returns the value of the symbol key 
//square brackets are used to create a computed property name

console.log(obj["sym"]); // undefined  it returns undefined because the key is not a string but a symbol
console.log(obj[Symbol("sym")]); // undefined  it returns undefined because the key is not a string but a symbol


//you can also update the value of the object using the dot notation or the square brackets
person.name = "Jane" // it updates the value of the property name to Jane
console.log(person); // { name: 'Jane', age: 30, city: 'New York' }  it returns the object with the updated value of the property name


//you can also freeze the object using the "Object.freeze()"" method
//it will not allow you to change the value of the object

Object.freeze(person) // it freezes the object and makes it immutable
console.log(person); // { name: 'Jane', age: 30, city: 'New York' }  it returns the object with the updated value of the property name
