//if-else statement


//one-line if-else statement
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Not Adult";  
console.log(isAdult); // Adult

//In this example, the variable age is compared to 18 using the >= operator.
//If age is greater than or equal to 18, the value "Adult" is assigned to the variable isAdult; otherwise, "Not Adult" is assigned.
//The result is then logged to the console.
//The ternary operator is a shorthand way of writing an if-else statement in JavaScript.

//The syntax for the ternary operator is as follows:
//condition ? expressionIfTrue : expressionIfFalse;



//STANDARD IF-ELSE STATEMENT
let age2 = 16;
let isAdult2;
if (age2 >= 18) {
    isAdult2 = "Adult";
}
else {
    isAdult2 = "Not Adult";
}
console.log(isAdult2); // Not Adult
//In this example, the variable age2 is compared to 18 using the >= operator.
//If age2 is greater than or equal to 18, the value "Adult" is assigned to the variable isAdult2; otherwise, "Not Adult" is assigne


//using && and || operators in if-else statement
let age3 = 20;
let isStudent = true;
let isAdult3 = (age3 >= 18 && !isStudent
) ? "Adult" : "Not Adult";
console.log(isAdult3); // Adult
//In this example, the variable age3 is compared to 18 using the >= operator.
//If age3 is greater than or equal to 18 and isStudent is false, the value "Adult" is assigned to the variable isAdult3; otherwise, "Not Adult" is assigned.
//The result is then logged to the console.
//The && operator is used to check if both conditions are true, and the ! operator is used to negate the value of isStudent.
//The result is then logged to the console.

//with || operator
let age4 = 16;
let isStudent2 = false;
let isAdult4 = (age4 >= 18 || isStudent2) ? "Adult" : "Not Adult";
console.log(isAdult4); // Not Adult
//In this example, the variable age4 is compared to 18 using the >= operator.
//If age4 is greater than or equal to 18 or isStudent2 is true, the value "Adult" is assigned to the variable isAdult4; otherwise, "Not Adult" is assigned.
//The result is then logged to the console.
//The || operator is used to check if at least one of the conditions is true.

