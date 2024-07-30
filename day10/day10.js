// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');
function changeText() {
    paragraph.textContent = 'The text has been changed!';
}

button.addEventListener('click', changeText);

// • Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById('myImage');

function toggleVisibility() {
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}

image.addEventListener('dblclick', toggleVisibility);

// Activity 2: Mouse Events

// • Task 3: Add a mouseover event listener to an element that changes its background color.

// • Task 4: Add a mouseout event listener to an element that resets its background color.
// task 3 & 4 ->->

const element = document.getElementById('myElement');

function changeBackgroundColor() {
    element.style.backgroundColor = 'lightcoral';
}

function resetBackgroundColor() {
    element.style.backgroundColor = 'lightblue';
}

element.addEventListener('mouseover', changeBackgroundColor);

element.addEventListener('mouseout', resetBackgroundColor);

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const inputField = document.getElementById('myInput');

function logKey(event) {
    console.log(`Key pressed: ${event.key}`);
}
inputField.addEventListener('keydown', logKey);

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("inputField");
    const displayParagraph = document.getElementById("displayParagraph");

    inputField.addEventListener("keyup", function() {

        const currentValue = inputField.value;
        displayParagraph.textContent = currentValue;
    });
});

// Activity 4: Form Events

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.addEventListener("DOMContentLoaded", function() {
   
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    });
});

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("dropdown");
    const displayParagraph = document.getElementById("para");

    dropdown.addEventListener("change", function() {
        const selectedValue = dropdown.value;
        displayParagraph.textContent = selectedValue;
    });
});

// Activity 5: Event Delegation

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("list");
    list.addEventListener("click", function(event) {
        if (event.target && event.target.nodeName === "LI") {
            console.log(event.target.textContent);
        }
    });
});

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.addEventListener("DOMContentLoaded", function() {
    const parent = document.getElementById("parent");
    const addChildButton = document.getElementById("addChild");
    parent.addEventListener("click", function(event) {
        
        if (event.target && event.target.classList.contains("child")) {
            console.log(event.target.textContent);
        }
    });

    function addChildElement() {
        const newChild = document.createElement("div");
        newChild.className = "child";
        newChild.textContent = "I am a dynamically added child element";
        parent.appendChild(newChild);
    }

    addChildButton.addEventListener("click", addChildElement);
});
