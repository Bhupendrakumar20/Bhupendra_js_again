///creating the object using the constructor function

// function Person(name, age, city) {
//     this.name = name
//     this.age = age
//     this.city = city
// }

const person1 = new Object() // it creates a new object using the Object constructor
console.log(person1); // {}  it returns an empty object

person1.name = "John" // it adds the property name to the object
person1.age = 30 // it adds the property age to the object
console.log(person1); // { name: 'John', age: 30 }  it returns the object with the property name and age

//we are using the nested object to create the object

const person2 = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}
console.log(person2); // { name: 'John', age: 30, city: 'New York', address: { street: '123 Main St', city: 'New York', state: 'NY' } }  it returns the object with the property name, age, city and address

console.log(person2.address); // { street: '123 Main St', city: 'New York', state: 'NY' }  it returns the object with the property address

console.log(person2.address.street); // 123 Main St  it returns the value of the property street of the object address
console.log(person2.address.city); // New York  it returns the value of the property city of the object address
console.log(person2.address.state); // NY  it returns the value of the property state of the object address



//how to merge the two objects
const person3 = {
    name: "John",
    age: 30,
    city: "New York"
}
const person4 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
}
const merged_person = Object.assign({}, person3, person4) // it merges the two objects and returns a new object 
// {} it shows the storing object is empty object

console.log(merged_person); // { name: 'Jane', age: 25, city: 'Los Angeles' }  it returns the object with the properties of both objects



//another way to merge the two objects using the spread operator
const merged_person2 = { ...person3, ...person4 } // it merges the two objects and returns a new object
console.log(merged_person2); // { name: 'Jane', age: 25, city: 'Los Angeles' }  it returns the object with the properties of both objects





//use of object.keys() method
const keys = Object.keys(person3) // it returns the keys of the object as an array
console.log(keys); // [ 'name', 'age', 'city' ]  it returns the keys of the object as an array


//use of object.values() method
const values = Object.values(person3) // it returns the values of the object as an array
console.log(values); // [ 'John', 30, 'New York' ]  it returns the values of the object as an array


//use of object.entries() method
const entries = Object.entries(person3) // it returns the entries of the object as an array of arrays
console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]  it returns the entries of the object as an array of arrays

console.log(Object.values(person3).includes("John")); // true  it returns true because the values method is not a function of the object constructor