const marvel_characters = ["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_characters = ["superman", "batman", "Flash", "wonder"];

marvel_characters.push(dc_characters)

console.log(marvel_characters); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', [ 'superman', 'batman', 'Flash', 'wonder' ] ]
console.log(marvel_characters[5]); 

//it is adding the dc_characters array to the marvel_characters array as a single element
//it is not merging the two arrays

let another_merge = marvel_characters + dc_characters ;
console.log(another_merge); // thor,ironman,hulk,spiderman,black widow,superman,batman,Flash,wonder
//it is converting both arrays to strings and then concatenating them
//it is not merging the two arrays
//it is creating a new string with the elements of both arrays


//using concat method to merge the two arrays
const merged_characters = marvel_characters.concat(dc_characters)
console.log(merged_characters); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'batman', 'Flash', 'wonder' ]
//it is merging the two arrays and returning a new array
//it is not modifying the original arrays
//it is creating a new array with the elements of both arrays



//using spread operator to merge the two arrays
const merged_characters2 = [...marvel_characters, ...dc_characters]
console.log(merged_characters2); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'batman', 'Flash', 'wonder' ]
//it is merging the two arrays and returning a new array
//it is not modifying the original arrays



//USE OF MAP FUNCTION
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map((number) => number * number)
console.log(squares); // [ 1, 4, 9, 16, 25 ] //it is returning a new array with the squares of the numbers in the original array
//it is not modifying the original array


//USE OF FILTER FUNCTION
const even_numbers = numbers.filter((number) => number % 2 === 0)
console.log(even_numbers); // [ 2, 4 ] //it is returning a new array with the even numbers in the original array
//it is not modifying the original array

//USE OF REDUCE FUNCTION
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0)
console.log(sum); // 15 //it is returning the sum of the numbers in the original array
//it is not modifying the original array

//USE OF FIND FUNCTION
const first_even_number = numbers.find((number) => number % 2 === 0)
console.log(first_even_number); // 2 //it is returning the first even number in the original array
//it is not modifying the original array

//DIFFERENCE BETWEEN FILTER AND FIND FUNCTION
//filter returns all the elements that match the condition and find returns the first element that matches the condition
//filter returns an array and find returns a single element


//USE OF SOME FUNCTION
const has_even_number = numbers.some((number) => number % 2 === 0)
console.log(has_even_number); // true //it is returning true if there is at least one even number in the original array
//it is not modifying the original array

//USE OF FLAT FUNCTION
const nested_array = [1, 2, [3, 4], [5, 6]]
const flat_array = nested_array.flat()
console.log(flat_array); // [ 1, 2, 3, 4, 5, 6 ] //it is returning a new array with the elements of the nested array flattened
//it is not modifying the original array

