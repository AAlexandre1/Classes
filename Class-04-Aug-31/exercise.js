// Exercise 1
// Write a JavaScript function called greet that takes a name as an argument and returns a greeting message. For example, if the name is "John", the function should return "Hello, John!".

function greet(name = "Alex") {
   console.log(`Hello, ${name}!`);
};

greet();




// Exercise 2
// Write a JavaScript function called multiply that takes two numbers as arguments and returns their product. Test the function with different inputs.

function multiply(num1 = 2, num2 = 3) {
   const answer = num1 * num2;
   console.log(answer); 

};

multiply(3, 4);





// Exercise 3
// Create a JavaScript object called person with properties for name, age, and gender. Assign appropriate values to the properties and display the object on the console.

const person = {
   name: "Taylor",
   age: 33,
   gender: "female",
};

console.log(person);





// Exercise 4
// Create a JavaScript object called car with properties for make, model, and year. Assign appropriate values to the properties and display the object on the console.

car = {
   make: "honda",
   model: "civic",
   year: 2018,
};

console.log(car);




// Exercise 5
// Write a JavaScript function called reverseString that takes a string as an argument and returns the reverse of the string. For example, if the input is "Hello", the function should return "olleH".

function reverseString(myString = "Hello") {
  console.log(myString.split("").reverse().join(""));
  console.log(myString);
  
};
reverseString();





// Exercise 6
// Write a JavaScript function called calculateArea that takes the radius of a circle as an argument and returns the area of the circle. Use the formula A = π * r^2.

function calculateArea(radius = 5) {
   let area = Math.PI * (radius *radius);
   console.log(`The area of the circle is ${area.toFixed(2)}.`);
}
calculateArea(8);




// Exercise 7
// Use the Date object to display the current date and time on the console.

const currentDate = new Date();
console.log(currentDate);





// Exercise 8
// Use the Math object to generate a random number between 1 and 10 and display it on the console.
let randomNumber = Math.random();
randomNumber = (randomNumber * 10) + 1
console.log(Math.trunc(randomNumber));






// Exercise 10
// Create a function that takes in an argument and uses string interpolation to print that arguments value somewhere in a text string
// [ ] Create a function
// [ ] Have that function take in an argument
// [ ] Print a statement that uses the variable along with some other text

function interpolation (argument = "Hello") {
   console.log(`Your argument is ${argument}.`);
};

interpolation("Hello");






// Exercise 11
// Create an application that, on button click, runs a function that prints out a users name, age, and occupation
// [ ] Create the HTML with a button
// [ ] Create a function that takes in a user object
// [ ] Print each item in the user object out in a string to the console

const user = {
   name: "Taylor",
   age: 33,
   occupation: "singer",

}


function information() {
   console.log(`${user.name}, ${user.age}, ${user.occupation}`);
};








// Exercise 12
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

function splitObject() {

};