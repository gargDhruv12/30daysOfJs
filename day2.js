// Tasks/Activities:

// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
a = 23;
console.log("a = ",a); // output : a =  23
b= 42;
console.log("b = ",b); // output : b =  42
sum = a+b;
console.log("sum = ",sum); // output : sum =  65

// Task 2: Write a program to subtract two numbers and log the result to the console.
let diff = a-b;
console.log("diff = ",diff); // output : diff =  -19

// Task 3: Write a program to multiply two numbers and log the result to the console.
let prod = a*b;
console.log("prod = ",prod); // output : prod =  966

// Task 4: Write a program to divide two numbers and log the result to the console.
let division = b/a;
console.log("division = ",division); // output : division =  1.826086956521739

// Task 5: Write a program to find the remainder when ane number is divided by another and log the result to the console
let modulo = b%a;
console.log("modulo = ",modulo); // output : modulo =  19

// Activity 2: Assignment Operators

// Task 6: Use the operator += to add a number to a variable and log the result to the console.
a+= 7;
console.log("a+= 7, a= ",a); // output : a+= 7, a=  30

// Task 7: Use the operator -= to subtract a number from a variable and log the result to the console.
b-= 12;
console.log("b-= 12, b= ",b); // output : b-= 12, b=  30

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log("23 > 39 = ",23 > 39); // output : 23 > 39 =  false
console.log("23 < 39 = ",23 < 39); // output : 23 < 39 =  true

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("23 >= 39 = ",23 >= 39); // output : 23 >= 39 =  false
console.log("5 <= 7 = ",5 <= 7); // output : 5 <= 7 =  true

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("3 == '3' = ",3 == '3'); // output : 3 == '3' =  true
console.log("3 === '3' = ",3 === '3'); // output : 3 === '3' =  false

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. 
console.log("(2<3) && (9>7) = ",(2<3) && (9>7)); // output : (2<3) && (9>7) =  true 

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log("(2<3) || (9>7) = ",(2<3) || (9>7)); // output : (2<3) || (9>7) =  true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("!(4 === '4') = ",!(4 === '4')); // output : !(4 === '4') =  true

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num =45;
let check = (num > 0) ? true : false;
if(num){
    console.log("num = ",num," is +ve"); // output : num =  45  is +ve
}
else
    console.log("num = ",num," is -ve");
