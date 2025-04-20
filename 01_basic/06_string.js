let name = "John Doe"; // string
let age = 30; // number

console.log(name); // John Doe
console.log(name + " is " + age + " years old."); // John Doe is 30 years old.  [THIS IS THE OLD WAY TO CONCATENATE STRINGS]
console.log(`My name is ${name} and I am ${age} years old.`); // My name is John Doe and I am 30 years old. [THIS IS THE NEW WAY TO CONCATENATE STRINGS USING TEMPLATE LITERALS]


console.log(name.length); // 8 (length of the string)
console.log(name.charAt(0)); // J (first character of the string)
console.log(name.charAt(name.length - 1)); // e (last character of the string)
console.log(name.indexOf("o")); // 1 (index of the first occurrence of "o" in the string)
console.log(name.lastIndexOf("o")); // 7 (index of the last occurrence of "o" in the string)
console.log(name.toUpperCase()); // JOHN DOE (convert the string to uppercase)
console.log(name.toLowerCase()); // john doe (convert the string to lowercase)
console.log(name.trim()); // John Doe (remove whitespace from both sides of the string)
console.log(name.split(" ")); // [ 'John', 'Doe' ] (split the string into an array of substrings using space as a separator)
console.log(name.replace("John", "Jane")); // Jane Doe (replace "John" with "Jane" in the string)
console.log(name.includes("Doe")); // true (check if the string contains "Doe")
console.log(name.charAt(0).toUpperCase() + name.slice(1)); // John Doe (capitalize the first letter of the string)
console.log(name.indexOf(" ")); // 4 (index of the first occurrence of space in the string)
console.log(name.substring(0, 4)); // John (substring from index 0 to 4)
console.log(name.substring(4)); // Doe (substring from index 4 to the end of the string)
console.log(name.substr(0, 4)); // John (substring from index 0 to 4)
console.log(name.substr(4)); // Doe (substring from index 4 to the end of the string)


//difference between substring and substr:
// substring(start, end) - extracts characters from start to end (not including end)
// substr(start, length) - extracts characters from start to length (length is the number of characters to extract)
// substring(0, 4) - extracts characters from index 0 to index 4 (not including 4)
// substr(0, 4) - extracts characters from index 0 to index 4 (length is 4)
// substring(4) - extracts characters from index 4 to the end of the string
// substr(4) - extracts characters from index 4 to the end of the string (length is not specified, so it will extract all characters from index 4 to the end of the string)


//difference between indexOf and lastIndexOf:
// indexOf(searchValue, fromIndex) - returns the index of the first occurrence of searchValue in the string, starting from fromIndex (default is 0)
// lastIndexOf(searchValue, fromIndex) - returns the index of the last occurrence of searchValue in the string, starting from fromIndex (default is string length - 1)
// indexOf("o") - returns the index of the first occurrence of "o" in the string (1)
// lastIndexOf("o") - returns the index of the last occurrence of "o" in the string (7)
// indexOf("o", 2) - returns the index of the first occurrence of "o" in the string, starting from index 2 (7)
// lastIndexOf("o", 6) - returns the index of the last occurrence of "o" in the string, starting from index 6 (1)
// indexOf("o", -1) - returns -1 (not found)
// lastIndexOf("o", -1) - returns -1 (not found)


//difference between substring and slice:
// substring(start, end) - extracts characters from start to end (not including end)
// slice(start, end) - extracts characters from start to end (not including end)
//note: slice can also accept negative indices, which count from the end of the string
// substring does not accept negative indices, and will treat them as 0

//replace method:
// log url="http://example.com/hello/world"
// log url.replace("http://", "https://")         // https://example.com/hello/world (replace http:// with https:// in the url)
