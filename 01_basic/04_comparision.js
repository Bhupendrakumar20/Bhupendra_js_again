"use strict";
let num = Number(NaN);
console.log(num);
console.log(num >= 0);
console.log(Number("1"));

console.log(1<2); // true (1 is not greater than 2)
console.log("1" >2); // false (string "1" is not greater than 2) -->it convert the string into number
console.log(1>"2"); // false (1 is not greater than string "2") -->it convert the string into number first then compare
console.log("1" >"2"); // false (string "1" is not greater than string "2") -->it compare the string as above
console.log(NaN > 2); // false any comparison involving NaN (like NaN > 2, NaN < 2, NaN == NaN, etc.) will always return false.
console.log(undefined > 2); // false any comparison involving undefined (like undefined > 2 etc.) will always return false.


//note & important:
//strictly equal to (===) operator checks both value and type, while loose equal to (==) operator checks only value.
console.log(1===1); // true (1 is equal to 1)
console.log(1==="1"); // false (1 is not equal to string "1")

//lose equal to (==) operator checks only value, while strict equal to (===) operator checks both value and type.
console.log(1==1); // true (1 is equal to 1)
console.log(1=="1"); // true (1 is equal to string "1")
console.log(1==true); // true (1 is equal to true)