// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// • Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("first").textContent ="Hi, I am a div";

// • Task 2: Select an HTML element by its class and change its background color.
const elements = document.getElementsByClassName("day");
elements[0].style.backgroundColor = 'red';

// Activity 2: Creating and Appending Elements

// • Task 3: Create a new div element with some text content and append it to the body.
// const newdiv = document.createElement("div");
// newdiv.textContent = "Hey, I am a new div";
// document.body.appendChild(newdiv);

// • Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.textContent = "It is a new li element";
document.getElementsByClassName("list")[0].appendChild(newLi);

// Activity 3: Removing Elements

// • Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("toBeRemove").remove();

// • Task 6: Remove the last child of a specific HTML element.
let ul = document.querySelector("ul");
ul.removeChild(ul.lastChild);

// Activity 4: Modifying Attributes and Classes

// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.getElementById('myImage');
image.width = 300;

// • Task 8: Add and remove a CSS class to/from an HTML element.
paragraph.classList.add('highlight');
paragraph.classList.remove('highlight');

// Activity 5: Event Handling

// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById('my-button');
const paragraph = document.getElementById('my-paragraph');

function changeText() {
    paragraph.textContent = 'The text has been changed!';
}

button.addEventListener('click', changeText);


// • Task 10: Add a mouseover event listener to an element that changes its border color.
const box = document.getElementById('my-box');

function changeBorderColor() {
    box.style.borderColor = 'red';
}

function resetBorderColor() {
    box.style.borderColor = 'black';
}

box.addEventListener('mouseover', changeBorderColor);
box.addEventListener('mouseout', resetBorderColor);
