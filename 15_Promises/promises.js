// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a function (executor) that has two parameters: resolve and reject.

//resolve is called when the asynchronous operation is successful, and reject is called when it fails.

new Promise((resolve, reject) => {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(() => {
    console.log("Asynchronous operation completed");
    resolve()
  }, 2000);
}).then(() => {
  console.log("Promise resolved successfully");
});


// If the asynchronous operation is successful, we call resolve() to fulfill the promise.

new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        console.log("Asynchronous operation 2 completed ");
        resolve("Data fetched successfully");
        }, 2000);
}).then((data) => {
    console.log(data);
});

// If the asynchronous operation fails, we call reject() to reject the promise.
new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        console.log("Asynchronous operation 3 failed");
        reject("Error occurred while fetching data");
    }, 2000);
}).catch((error) => {
    console.error(error);
});


const Prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // Change this to true to simulate an error
        if (!error) {
            resolve("Data fetched successfully");
            } else {
                reject("Error occurred while fetching data");
            }
    }, 2000);
});

Prom.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});



// We can also chain multiple .then() methods to handle the result of a promise.
new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        console.log("Asynchronous operation 4 completed");
        resolve("Data fetched successfully");
    }, 2000);
}).then((data) => {
    console.log(data);
    return "Processing data";
}).then((processedData) => {
    console.log(processedData);
});


//await is a keyword that can be used to wait for a promise to resolve or reject. It can only be used inside an async function.
// It pauses the execution of the function until the promise is settled (either resolved or rejected).

// We can also use async/await syntax to work with promises in a more synchronous way.
async function fetchData() {
    try {
        const data = await new Promise((resolve, reject) => {
            // Simulating an asynchronous operation using setTimeout
            setTimeout(() => {
                console.log("Asynchronous operation 5 completed");
                resolve("Data fetched successfully");
            }, 2000);
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
 

fetchData();


