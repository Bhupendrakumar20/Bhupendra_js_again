let myDate =new Date();
console.log(myDate); // current date and time
console.log(myDate.toString()); // current date and time in string format
console.log(myDate.toISOString()); // current date and time in ISO format
console.log(myDate.toUTCString()); // current date and time in UTC format
console.log(myDate.toLocaleString()); // current date and time in local format 
console.log(myDate.toLocaleDateString()); // current date in local format
console.log(myDate.toLocaleTimeString()); // current time in local format
console.log(myDate.getFullYear()); // current year
console.log(myDate.getMonth()); // current month (0-11)

let curDate = new Date("2023-10-01"); // specific date in string format
console.log(curDate);
console.log(curDate.toString()); // date in string format

let now_date =Date.now(); // current date and time
console.log(now_date); // current date and time in milliseconds since January 1, 1970
console.log(now_date.toString()); // current date and time in string format

