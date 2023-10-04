// Exercise 1
// Understand DOM Selection.
// Use JavaScript to select the element with an ID of "myDiv" and change its background color to "lightblue". Select all the paragraph (<p>) elements on the page and log their inner text. Starting Code:
/*
<div id="myDiv">This is a div</div>
<p>First paragraph.</p>
<p>Second paragraph.</p>
*/

const myDiv = document.querySelector('#myDiv');

myDiv.style.backgroundColor = '#47a3e8';

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach ((p) => {console.log(p.innerText);})




// Exercise 2
// Familiarize with DOM events and inline event handlers in web development.
// Create a new HTML file named dom.html and include a button with the class btn and btn_inline.
// Add an onclick event to this button that will call a JavaScript function named changeBackground().
// Within the same HTML file, create a <script> section. Inside this section, define the changeBackground() function. When executed, this function should change the background color of the document.

function changeBG() {
   document.body.style.backgroundColor = "#5f28ca"
};

function resetBG() {
   document.body.style.backgroundColor = ""
};






// Exercise 3
// Deepen understanding of DOM selection methods and dynamic interaction by handling multiple elements.
// Create a new HTML file named multiple_buttons.html. In this file, include at least three buttons with the class btn_onclick. Each button can have unique text like "Button 1", "Button 2", and so on.
// In the same HTML file, create a <script> section.
// Inside the script element, use the querySelectorAll method to select all buttons with the class btn_onclick.
// Use the forEach method to loop over each button in the node list.
// For each button, add an onclick event that will change the document's background color when the button is clicked.
// Instead of setting a static color like #a7f3d0, make the color dynamic.
// For an added challenge, assign a different color to each button so that when clicked, they change the background color to a unique hue.
// Test your code by opening multiple_buttons.html in a browser. Each button should change the background to a distinct color.








// Exercise 4




// Exercise 5




// Exercise 6




