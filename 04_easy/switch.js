//switch case
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); // Wednesday
// //In this example, the variable day is compared to the values in each case statement.
// //If day is equal to 3, the value "Wednesday" is assigned to the variable dayName. The break statement is used to exit the switch statement after a match is found.
// //If no match is found, the default case is executed, and "Invalid day" is assigned to dayName.
// //The result is then logged to the console.
// //The switch statement is a cleaner way to write multiple if-else statements when comparing the same variable to different values.
// //It is often used when you have a fixed set of values to compare against, such as days of the week, months of the year, or menu options.
// //The switch statement can also be used with strings, booleans, and other data types, not just numbers.
// //The syntax for the switch statement is as follows:
// switch (expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     // more cases
//     default:
//         // code block
// }
// //In this syntax, expression is the value being compared, and each case represents a possible value for that expression.


//IMPORTANT NOTE:
//NULLISH OPERATOR (??)
//The nullish operator (??) is a logical operator in JavaScript that returns the right-hand operand when the left-hand operand is null or undefined.
//It is often used as a default value for variables or function parameters when the value is not provided or is null/undefined.
//The syntax for the nullish operator is as follows:
value1 = null;
value2 = "default value";
result = value1 ?? value2;
console.log(result); // default value
//In this example, the variable value1 is null, so the nullish operator returns the value of value2, which is "default value".
//If value1 were not null or undefined, the nullish operator would return the value of value1 instead.

