//array making first 

//it is doing shallow copy of the array and returns the array...
//shallow copy means it copies the reference of the array and not the value of the array
// {which means if we change the value of the array it will not change the original array}

//deep copy means it copies the value of the array and not the reference of the array
// {which means if we change the value of the array it will change the original array}

let arr = new Array(5); // create an array of length 5
brr=new Array(5, 10, 15); // create an array of length 3 with values 5, 10, 15
console.log(arr); // [ <5 empty items> ]  it creates an array of length 5 with empty items
console.log(brr); // [ 5, 10, 15 ]  it creates an array of length 3 with values 5, 10, 15
console.log(arr.length); // 5  it returns the length of the array
console.log(brr.length); // 3  it returns the length of the array
console.log(arr[0]); // undefined  it returns the first element of the array which is undefined
console.log(brr[0]); // 5  it returns the first element of the array which is 5
console.log(arr[4]); // undefined  it returns the last element of the array which is undefined
console.log(brr[2]); // 15  it returns the last element of the array which is 15

brr.push(20); // add 20 to the end of the array
console.log(brr); // [ 5, 10, 15, 20 ]  it adds 20 to the end of the array
brr.pop(); // remove the last element of the array
console.log(brr); // [ 5, 10, 15 ]  it removes the last element of the array
brr.unshift(0); // add 0 to the beginning of the array
console.log(brr); // [ 0, 5, 10, 15 ]  it adds 0 to the beginning of the array

console.log(brr.includes(10)); // true  it returns true if the array includes 10
console.log(brr.includes(100)); // false  it returns false if the array does not include 100
console.log(brr.indexOf(10)); // 2  it returns the index of 10 in the array
console.log(brr.indexOf(100)); // -1  it returns -1 if 100 is not found in the array

console.log(brr.join()); // 0,5,10,15  it returns the array as a string separated by commas
console.log(brr.join("-")); // 0-5-10-15  it returns the array as a string separated by -
console.log(brr.reverse()); // [ 15, 10, 5, 0 ]  it reverses the array
console.log(brr.sort()); // [ 0, 10, 15 ]  it sorts the array in ascending order
console.log(brr.slice(1, 3)); // [ 10, 15 ]  it returns a shallow copy of the array from index 1 to index 3
console.log(brr.splice(1, 2)); // [ 10, 15 ]  it removes 2 elements from index 1 and returns them...

//difference between slice and splice is that slice returns a shallow copy of the array and splice removes the elements from the original array
// and returns them...
console.log(brr); // [ 0 ]  it removes 2 elements from index 1 and returns them