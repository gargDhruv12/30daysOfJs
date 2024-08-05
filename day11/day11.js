// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 2000);
})
promise1.then((res) => {
    console.log(res);
})
// output : First promise resolved

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise rejected !!");
    },2000)
})
promise2.catch((err)=>{
    console.log(err);
})
// output : Promise rejected !!

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("succesful");
        },2000);
    })
}
console.log("Fetching from promise 1");
getdata(1).then((res)=>{
    console.log("Fetching from promise 2");
    return getdata(2);
}).then((res)=>{
    console.log("Fetching from promise 3");
    return getdata(3);
}).then((res)=>{
    console.log(res);
})
// output :->->
// Fetching from promise 1
// data 1
// Fetching from promise 2
// data 2
// Fetching from promise 3
// data 3
// succesful

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function getAlldata(){
    console.log("Fetching data1 ....");
    let output1 = await getdata(1);
    console.log(output1);
    console.log("Fetching data2 ....");
    let output2 = await getdata(2);
    console.log(output2);
}
getAlldata();
// output : 
// Fetching data1 ....
// data 1
// succesful
// Fetching data2 ....
// data 2
// succesful

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.


// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
let url = "https://cat-fact.herokuapp.com/facts";
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
// output :
// Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

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
fetchdata2(); // output :
// When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied "cats."

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
prom = new Promise((resolve,reject)=>{
    resolve("new promise resolved");
})
Promise.all([promise1,prom]).then((val)=>{
    console.log(val);
}) 
// output :
//[ 'First promise resolved', 'new promise resolved' ]

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

console.log("Task 9");
promise_1 =new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Promise 1");
})
promise_2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Promise 2");
})
Promise.race([promise_1,promise_2]).then((res)=> console.log(res));
// output :
// Task 9
// Promise 2