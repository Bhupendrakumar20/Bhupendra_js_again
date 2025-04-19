const accountId = 1234567890; // const is block scoped and cannot be changed later

var accountPassword = "12345"; // var is function scoped

//var can't use in block scope...this is the old method to declare the variable(which can be changed later)


//we use let instead of var ....let is block scoped...this is the new method to declare the variable(which can be changed later)
let accountemail = "Bhupendra@google.com"; // let is block scoped

//let can't use in block scope...this is the new method to declare the variable(which can be changed later)

// accountId = 1234567891; // this will throw an error because accountId is a constant and cannot be changed

accountPassword = "54321";
accountemail = "Bhupendra@microsoft,com";
console.log(accountId); // 1234567890
console.log(accountPassword); // 54321
console.log(accountemail); // Bhupendra@microsoft,com


//print the file ...simply write the node FULLDIRECTORY
//console.log(accountId);  this is used as for singly print the value ..

//what if i want to print multiple values in a single line....at that time we use console.table([accountId, accountPassword, accountemail]);

console.table([accountId, accountPassword, accountemail]); // this will print the values in a table format