// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1,2,3,4,5];
console.log(arr); // output : [ 1, 2, 3, 4, 5 ]

// • Task 2: Access the first and last elements of the array and log them to the console.
const first = arr[0];
const last = arr[arr.length -1 ];
console.log("First element of array = ",first);
console.log("Last element of array =",last);
// output : 
// First element of array =  1
// Last element of array = 5

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array. 
arr.push(6);
console.log("Updated array after push : ",arr);
// output : Updated array after push :  [ 1, 2, 3, 4, 5, 6 ]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log("Updated array after pop : ",arr);
// output : Updated array after pop :  [ 1, 2, 3, 4, 5 ]

// Task 5: Use the shift method to remove the first element from the array and log the updated array. 
arr.shift();
console.log("Updated array after shift : ",arr);
// output : Updated array after shift :  [ 2, 3, 4, 5 ]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(100);
console.log("Updated array after unshift : ",arr);
// output : Updated array after unshift :  [ 100, 2, 3, 4, 5 ]

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const newarr1 = arr.map((n)=>{
    return n*2;
});
console.log("New array using map fun ",newarr1);
// output : New array using map fun  [ 200, 4, 6, 8, 10 ]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const newarr2 = arr.filter((num)=>{
    return num %2 ==0;
});
console.log("New array using filter fun ",newarr2);
// output : New array using filter fun  [ 100, 2, 4 ]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = arr.reduce((sum,num)=>{
    return sum+num;
});
console.log("Sum of the elements of ",arr," is ",sum);
// output : Sum of the elements of  [ 100, 2, 3, 4, 5 ]  is  114

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0; i< arr.length; i++){
    process.stdout.write(arr[i] + " ");
}
process.stdout.write("\n");
// output : 100 2 3 4 5 

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((num)=>{
    process.stdout.write(num + " ");
})
process.stdout.write("\n"); // output : 100 2 3 4 5

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let Arr = [['Dhruv','IT',32],[2,3,4],["Js",31,49]];
for(i=0; i< Arr.length; i++){
    for(let j=0; j < Arr[i].length; j++){
        process.stdout.write(Arr[i][j] + " ");
    }
    process.stdout.write("\n");
}
// output : 
//  Dhruv IT 32
//  2 3 4
//  Js 31 49

// Task 13: Access and log a specific element from the two-dimensional array.
let x = Arr[2].at(0);
console.log(x); 
// output : Js
