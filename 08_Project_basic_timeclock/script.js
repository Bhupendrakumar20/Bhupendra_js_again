//const clock = document.querySelector('#clock');   //where you are using queryselector in id then # will comes ...
//it give same output as document.getElementById('clock');



const clock = document.getElementById('clock'); // Get the clock element by its ID

setInterval(function() {
    let date = new Date(); // Create a new Date object to get the current date and time

    clock.innerHTML = date.toLocaleTimeString(); // Update the clock element with the current time in a readable format
}, 1000); // Update the clock every 1000 milliseconds (1 second)


