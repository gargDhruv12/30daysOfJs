// Day 13: Modules

// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import {multiply} from "./module1.js";
console.log(multiply(2,4,8));
// output : 64

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import {person} from "./module1.js"
console.log(person);
console.log(person.college());
// output :
// {name: 'Dhruv', branch: 'IT', college: ƒ}
// NIT KKr

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import {multiply as mul,addition as add,sub} from "./module2.js"
console.log(mul(2,3,4)); // 24
console.log(add(23,45,67)); // 135
console.log(sub(20,12)); // 8

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import divide from "./module1.js";
console.log(divide(20,2)); // output : 10

// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as store from "./module3.js";
store.greet(); // Hello! how are you

store.weather(); // Today is too hot

store.currentWork(); // Learning javascript

console.log(store.month); // August

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(array);

console.log(shuffled); // output : [ 5, 1, 4, 2, 3 ]

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// index.js

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Data fetched successfully:', response.data[1]);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// output :
//   Data fetched successfully: {
//     userId: 1,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae\n' +
//       'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
//       'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
//       'qui aperiam non debitis possimus qui neque nisi nulla'
//   }


// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.