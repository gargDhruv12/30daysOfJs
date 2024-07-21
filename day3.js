// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
let num = 45;
if(num > 0){
    console.log("num = ",num," is +ve"); // output : num =  45  is +ve
}
else
console.log("num = ",num," is -ve");
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 17;
if(age >= 18){
    console.log("You are eligible to vote");
}
else
console.log("You are not eligible to vote"); // output : You are not eligible to vote

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 27, b= 39, c= 12;
if(a>=b){
    if(a>c){
        console.log("a = ",a," is highest");
    }
    else{
        console.log("c = ",c," is highest");
    }    
}
if(b>=a){
    if(b>c){
        console.log("b = ",b," is highest");
    }
    else{
        console.log("c = ",c," is highest");
    }    
} // output : b =  39  is highest

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
let day = Math.floor(Math.random() * 7)+1;
switch(day){
    case 1 :
        console.log("Sunday");
        break;
    case 2 :
        console.log("Monday");
        break;
    case 3 :
        console.log("Tuesday");
        break;
    case 4 :
        console.log("Wednesday");
        break;
    case 5 :
        console.log("Thursday");
        break;
    case 6 :
        console.log("Friday");
        break;
    case 7 :
        console.log("Saturday");
        break;
    default :
        console.log("Invalid input");
}// output : Friday

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B, 'C, 'D', 'F') based on a score and log the grade to the console.
let score = Math.floor(Math.random() * 100);
switch(true){
    case score>=90 :
        console.log("Grade assigned is 'A' ");
        break;
    case score>=80 :
        console.log("Grade assigned is 'B' ");
        break;
    case score>=70 :
        console.log("Grade assigned is 'C' ");
        break;
    case score>=50 :
        console.log("Grade assigned is 'D' ");
        break;
    case score<50 :
        console.log("Grade assigned is 'F' ");
        break;
    default :
        console.log("Invalid input");
} // output : Grade assigned is 'B'

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num1 = 23;
(23 %2 == 0) ? console.log("num1 = ",num1," is even") : console.log("num1 = ",num1," is odd");
// output : num1 =  23  is odd

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;
if((year % 4 ==0 && year % 100 != 0) || year % 400 ==0){
    console.log("year = ",year," is leap year");
}
else
    console.log("year = ",year," is not leap year"); // output : year =  2024  is leap year
