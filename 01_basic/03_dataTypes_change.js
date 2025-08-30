let score=100;
let scoreString=score.toString(); // convert number to string
console.log(scoreString); // "100"
console.log(typeof scoreString); // string
console.log(typeof score); // number


let scoreNumber=Number(scoreString); // convert string to number
console.log(scoreNumber); // 100
console.log(typeof scoreNumber); // number
console.log(typeof scoreString); // string
console.log(scoreNumber===score); // true (=== is strict equality operator, it checks both value and type)
console.log(scoreNumber==score); // true (== is loose equality operator, it checks only value)
console.log(scoreNumber===scoreString); // false (=== is strict equality operator, it checks both value and type)
console.log(scoreNumber==scoreString); // false (== is loose equality operator, it checks only value)
console.log(scoreNumber!=scoreString); // true (!= is loose inequality operator, it checks only value)
console.log(scoreNumber!==scoreString); // true (!== is strict inequality operator, it checks both value and type)
console.log(scoreNumber>scoreString); // false (> is greater than operator)
console.log(scoreNumber<scoreString); // false (< is less than operator)
console.log(scoreNumber>=scoreString); // true (>= is greater than or equal to operator)
console.log(scoreNumber<=scoreString); // false (<= is less than or equal to operator)


//note & important:
let scoreString1="100px"; // string with px(you are using number with the string)...
let scoreNumber1=Number(scoreString1); // convert string to number
console.log(scoreNumber1); // NaN (Not a Number)[it values are not a number]
console.log(typeof scoreNumber1); // number (but it is NaN)[its data type is number]
console.log(scoreNumber1===score); // false (=== is strict equality operator, it checks both value and type)
console.log(scoreNumber1==score); // false (== is loose equality operator, it checks only value)
console.log(typeof scoreNumber1 === typeof scoreString); // false (=== is strict equality operator, it checks both value and type)
console.log(typeof scoreNumber1 === typeof score); // false (=== is strict equality operator, it checks both value and type)
console.log(typeof scoreNumber1 == typeof score); // true (== is loose equality operator, it checks only value) 


//some operations on string
let str1="hello";
let str2="world";
let str3=str1+str2; // string concatenation (joining two strings)
console.log(str3); // "helloworld"
console.log(str3.length); // 10 (length of string)
console.log(str3.charAt(0)); // "h" (first character of string)
console.log(str3[0]);

console.log(1+2+"3"); // "33" (string concatenation)
console.log(1+"2"+3); // "123" (string concatenation)
console.log("1"+2+3); // "123" (string concatenation)
console.log(1+2+"3"+4); // "334" (string concatenation)

console.log(true); // true (boolean)
console.log(true+true); // 2 (true is converted to 1)
console.log(+true); // 1 (true is converted to 1)
//note: use the brackets to avoid the string concatenation 
