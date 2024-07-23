// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function check_pos(n){
    if(n % 2 ==0){
        console.log("n =",n," is +ve");
    }
    else
        console.log("n = ",n," is +ve");
}
check_pos(25); // output : n =  25  is +ve

// Task 2: Write a function to calculate the square of a number and return the result.
function square(n){
    return n*n;
}
let sq = square(6);
console.log("square of 6 = ",sq); // output : square of 6 =  36

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maximum = function(a,b){
    if(a>b){
        return a;
    }
    else
        return b;
        
}
let ans = maximum(23,45);
console.log("Max = ",ans); // output : Max =  45

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenate = function(s1,s2){
    return s1+s2;
}
console.log(concatenate("Dhruv"," Garg")); // output : Dhruv Garg

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const cal_sum = ((a,b) => {
    return a+b;
});
console.log(cal_sum(5,3)); // output : 8

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const check = ((s,ch) => {
    for(i=0; i< s.length; i++){
        if(s[i]==ch)
            return true;
    }
    return false;
})
console.log(check("Dhruv",'e')); // output : false

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // output : 10
console.log(multiply(5)); // output : 5

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 30) {
    return `Hello, ${name} You are ${age} years old.`;
}
console.log(greet('Rahul', 25)); // Hello, Rahul You are 25 years old.
console.log(greet('Harry')); // Hello, Harry You are 30 years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeat(func, t) {
    for (let i = 1; i <= t; i++) {
        func();
    }
}
repeat(() => console.log('I am a function'), 3); // output : 
// I am a function
// I am a function
// I am a function

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
function highorderFunctions(func1, func2, value) {
    return func2(func1(value));
}
const add_ten = x => x + 10;
const cube = x => x * x* x;
console.log(highorderFunctions(add_ten, cube , 7));// output : 4913