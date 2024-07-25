// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {title : "you only live once" , author : "Stuti Changle" , year : 2021};
console.log(book); // output :
// { title: 'you only live once', author: 'Stuti Changle', year: 2021 }

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title); // output : you only live once
console.log(book.author); // output : Stuti Changle

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.details = function(){
    return "Book's title : " + book.title + ",  Book's author : " + this.author;
}
console.log(book.details()); // output : Book's title : you only live once,  Book's author : Stuti Changle

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.changeY = function(year){
    book.year = year;
}
book.changeY(2012);
console.log("new book year : ",book.year); // output :-> new book year :  2012

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name : "Book-Bank",
    books: [{title : "you only live once" , author : "Stuti Changle" , year : 2021},
            {title : "The book of life", author : "Krishnamurti", year : 2001} ,
            {title : "The art of happiness", author : "Dalai Lama", year : 1999}]
};
console.log(library); // output :
// {
//     name: 'Book-Bank',
//     books: [
//       {
//         title: 'you only live once',
//         author: 'Stuti Changle',
//         year: 2021
//       },
//       { title: 'The book of life', author: 'Krishnamurti', year: 2001 },
//       { title: 'The art of happiness', author: 'Dalai Lama', year: 1999 }
//     ]
//   }

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library's name : ",library.name);
console.log("title of all books of library : ");
for(i=0; i< library.books.length; i++){
    console.log(library.books[i].title);
} // output :
// Library's name :  Book-Bank
// title of all books of library :
// you only live once
// The book of life
// The art of happiness

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.title_year = function(){
    return "Book's title : " + this.title + ",  Book's year : " + this.year;
};
console.log(book.title_year()); // output :
// Book's title : you only live once,  Book's year : 2012

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
let ans = "";
for(let x in book){
    // ans += x + " : " + book[x] + " , ";
    console.log(x + " : " + book[x]);
}
// output : ->

// title : you only live once
// author : Stuti Changle
// year : 2012
// details : function(){
//     return "Book's title : " + book.title + ",  Book's author : " + this.author;
// }
// changeY : function(year){
//     book.year = year;
// }
// title_year : function(){
//     return "Book's title : " + this.title + ",  Book's year : " + this.year;
// }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const Keys = Object.keys(book);
const Values = Object.values(book);
console.log(Keys);
console.log(Values); // output : 
// [ 'title', 'author', 'year', 'details', 'changeY', 'title_year' ]
// [
//     'you only live once',
//     'Stuti Changle',
//     2012,
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)]
//   ]
