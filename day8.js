// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Dhruv";
let age = 20;
console.log(`Hi! I am ${name}, ${age} years old, currently at NIT Kurukshetra.`);
// output : 
// Hi! I am Dhruv, 20 years old, currently at NIT Kurukshetra.

// Task 2: Create a multi-line string using template literals and log it to the console.
let str = ` Imagine
 Believe
 Achive`;
console.log(str);  // output :
//  Imagine
//  Believe
//  Achive

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [1,2,3,4,5];
let [first, second] = arr;
console.log("1st element =",first + " ,2nd element =",second); // output :
// 1st element = 1 ,2nd element = 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {title : "you only live once" , author : "Stuti Changle" , year : 2021};
const {title,author} = book;
console.log("title of the book :",title);
console.log("author of the book :",author); // output;
// title of the book : you only live once
// author of the book : Stuti Changle

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let newarr = [...arr,100,200];
console.log("new array with help of spread opr :",newarr);
// output : 
// new array with help of spread opr : [
//     1,   2,   3, 4,
//     5, 100, 200
//   ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args){
    let add =0;
    for (const num in args) {
        add+= args[num];
    }
    return add;
}
x = sum(1,2,3,4,5);
console.log("Sum of input no. in the function is",x);
// output : Sum of input no. in the function is 15

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with & without the second parameter.
function product(x,y=1){
    return x*y;
}
console.log(product(6,7)); // output : 42
console.log(product(6)); // output : 6

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
var company1 = "Google";
var company2 = "Microsoft"
var method = function(){
    console.log("Work hard!");
}
var obj = {company1,company2,method};
console.log(obj); 
obj.method(); // output :
// {
//     company1: 'Google',
//     company2: 'Microsoft',
//     method: [Function: method]
//   }
//   Work hard!

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let prop1 = "College";
let prop2 = "Branch";
let details = {
    [prop1] : "NIT kkr",
    [prop2] : "It",
    ["year"] : 2
};
console.log(details); // output :
// { College: 'NIT kkr', Branch: 'It', year: 2 }