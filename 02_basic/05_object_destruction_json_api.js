//object destruction is a way to extract values from an object and assign them to variables

const person5 = {
    name: "John",
    age: 30,
    city: "New York"
}


//WE ARE USING THE CURLY BRACES {} FOR DESTRUCTURING THE OBJECT
const {  city : CT } = person5 // it extracts the value of the property city and assigns it to the variable CT(CT --> it is alias name)
console.log(CT); // New York  it returns the value of the property city