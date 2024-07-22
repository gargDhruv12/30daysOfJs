// Day 4: Loops

// Tasks/Activities:

// Activity 1: For Loop

// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(i=1; i<=10 ;i++){
    // console.log(i);
    process.stdout.write(i + " ");
}
process.stdout.write("\n");
// output : 1 2 3 4 5 6 7 8 9 10 

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(i=1 ; i<=10 ;i++){
    console.log("5 * ",i," = ",5*i);
}
// output : 
// 5 *  1  =  5
// 5 *  2  =  10
// 5 *  3  =  15
// 5 *  4  =  20
// 5 *  5  =  25
// 5 *  6  =  30
// 5 *  7  =  35
// 5 *  8  =  40
// 5 *  9  =  45
// 5 *  10  =  50

// Activity 2: While Loop

// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum =0;
let j = 1; // Note : Do not use i as a variable here , will create reference error due to hoisting, already i used in for loop
while(j<=10){
    sum+= j;
    j++
}
console.log("Sum of first 10 num = ",sum); // output : Sum of first 10 num =  55

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
j--;
while(j>0){
    process.stdout.write(j + " ");
    j--;
}
process.stdout.write("\n");
// output : 10 9 8 7 6 5 4 3 2 1

// Activity 3: Do... While Loop

// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
j=1;
do{
    process.stdout.write(j + " ");
    j++
}
while(j<6);
process.stdout.write("\n"); // output : 1 2 3 4 5

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let x =6;
j = 1;
let fact=1;
do{
    fact*= j;
    j++;
}
while(j<=x);
console.log("Factorial of x= ",x," is ",fact); // output : Factorial of x=  6  is  720

// Activity 4: Nested Loops

// • Task 7: Write a program to print a pattern using nested for loops:

for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}// output : 
// *
// **
// ***
// ****
// *****

// Activity 5: Loop Control Statements

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(i=1; i<=10 ;i++){
    if(i== 5)
        continue;
    process.stdout.write(i + " ");
}
process.stdout.write("\n"); // output : 1 2 3 4 6 7 8 9 10

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(i=1; i<=10 ;i++){
    if(i== 7)
        break;
    process.stdout.write(i + " ");
}
process.stdout.write("\n"); // output : 1 2 3 4 5 6