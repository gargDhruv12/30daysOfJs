// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

try{
    let a = prompt("Enter a num <=100");
    a = parseInt(a)
    if(a > 100){
        throw new Error(`${a} is > 100`);
    }
} catch(err){
    console.log(err)
}// output :
// Error: 345 is > 100

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
try{
    let num1 = parseInt(prompt("Enter 1 num"));
    let num2 = parseInt(prompt("Enter 2 num"));
    if(num2 ==0){
        throw new Error(`num2 is zero which is invalid in case of division`);
    }
    result = num1/num2;
    console.log(result);
}catch(err){
    console.log(err);
} // output :
// Error: num2 is zero which is invalid in case of division

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try{
    console("lets try  something");
}
catch(err){
    console.log(err);
}
finally{
    console.log("We learn use of finally here");
}  // output :
// TypeError: console is not a function
// We learn use of finally here

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
// Both tasks 4 and 5 combined
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    console.log("Input is valid:", input);
}
function processInput(userInput) {
    try {
        validateInput(userInput);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation Error:", error.message);
        } else {
            console.error("An unexpected error occurred:", error.message);
        }
    }
}

const userInput = ""; 
processInput(userInput);
// output : 
// Validation Error: Input cannot be empty

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

 let promise = new Promise((resolve,reject)=>{
    // num should be <= 1000
    num = 1234;
    if(num > 1000 ){
        reject(`your num = ${num} is greater than 1000, enter a lesser no.`);
    }
    else{
        resolve("Promise successfull");
    }
 }).then((res)=> console.log(res)).catch(err => console.log(err));
// output : 
// your num = 1234 is greater than 1000, enter a lesser no.

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
let getpromise = ()=>{
    return new Promise((resolve,reject)=>{
        let x = Math.random();
        if(x>0.5){
            reject(`x = ${x}, Promise rejected`);
        }
        else{
            resolve(`x = ${x}, Promise resolved`);
        }
})}

let handlepromise = async ()=>{
    try{
        promise2 = await getpromise();
        console.log(promise2);
    }catch(err){
        console.log(err);
    }
}
handlepromise();
// output :
// x = 0.07631514270623652, Promise resolved

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.

 let url = "https://cat.herokuapp.com/facts";
const fetchdata = () => {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            if (!response.ok) {
                reject(new Error(`Error! status : ${response.status}`));
            }
            else {
                response.json().then((res) => {
                    resolve(res);
                })
            }
        }).catch((err) => {
            reject(err);
        })
    })
}
fetchdata().then((data) => console.log(data[3].text)).catch((err) => console.log(err));
// output : Error: Error! status : 503

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const fetchdata2 = async()=>{
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error! status : ${response.status}`);
        }
        let data = await response.json();
        console.log(data[0].text);
    }
    catch(err){
        console.log(err);
    }
}
fetchdata2();
// output :
// Error: Error! status : 503