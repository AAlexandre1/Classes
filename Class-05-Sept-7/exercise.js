// Exercise 1
// Given the code snippet. Explain what scopes are in this current context of the code.
// Starting Code:
/* function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();
*/
// innerFunction is able to access the variable outerVar because it can access the variables of the parent function 






// Exercise 2
// Apply Hoisting Correctly in a JS Project.
// Draft a JavaScript function where you call a function before its declaration.
// Analyze the behavior and understand how hoisting impacts the outcome.

// Starting Code:
/*
function mainFunction() {
	// Call the hoistedFunction here
	// Now, declare the hoistedFunction below
}

mainFunction();
*/
function mainFunction() {
   console.log(hoistedFunction());
   
}
mainFunction();
// This works because the hoistedFunction is created below and then hoisted so it is available to mainFunction.

function hoistedFunction() {
   let thisVariable = "This will be hoisted."
   return thisVariable;   
}






// Exercise 3
// Implement Closures in JavaScript.
// Develop a JavaScript function that returns another function.
// The inner function should have access to variables from the outer function's scope.

function outerFunction() {
   let outerVariable = "This is outside."
   function innerFunction() {
      let innerVariable = "This is inside."
      console.log(outerVariable, innerVariable);
            // Can access outerVariable from the outerFunction
   }
   return innerFunction();
   // returns the value from innerFunction
}

outerFunction();






// Exercise 4
// Understand the differences between Local and Global Scope.
// Declare a global variable outside of any function.
// Create a function that tries to modify that global variable.
// Create another function that declares a local variable with the same name.
// Observe the behavior when calling both functions.

// Starting Code:
/*
// Declare a global variable here

function modifyGlobal() {
    // Try to modify the global variable here
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
}

// Call both functions here
*/

let globalVariable = "This can be used aywhere."
console.log(globalVariable);

function modifyGlobal() {
   globalVariable = "I can use this too.";
}
console.log(globalVariable);
// The globalVariable is not yet changed because the function modifyGlobal has not been called
modifyGlobal();
console.log(globalVariable);
// After the function modifyGlobal has been called globalVariable is modified globally

function localScopeTest() {
   let globalVariable = "This can only be used in here."
   console.log(globalVariable);
   // The variable globalVariable in this function has the same name but is technically not the same variable. It is the same as having two separate boxes with the same labels.
}

console.log(globalVariable);
// The globalVariable still holds the modified value
localScopeTest();
// Calling the localScopeTest function returns the globalVariable variable that is initiallized in that function.
console.log(globalVariable);
// Logging globalVariable returns the global variable and not the local scope variable.







// Exercise 5
// Implement a Function Factory using Closures.
// Design a function that accepts a parameter.
// The function should return another function that uses the parameter in some way.

// Starting Code:
/*
function functionFactory(param) {
    // Return a function that makes use of 'param'
}

// Create an instance of the inner function by invoking functionFactory with a parameter
*/

function functionFactory(functionParameter) {
   function functionMachine() {
      console.log("This will print the functionParameter.", functionParameter);
      // The parameter functionParameter is not defined in this function, but instead inherits it from it's parent function.
   }
   functionMachine();
   // The parent function calls the child function.
}
functionFactory("Hello there");








// Exercise 6
//  Examine how Hoisting impacts variable declarations and the different types of variables used.
// Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.
// Starting Code:
/*
function hoistingTest() {
    // Try printing a variable here

    // Declare the variable after the console.log
}

hoistingTest();
*/
/*
function hoistingTest() {
   let testing;
   // This is undefined because it is a local scope variable and can not be initiallized outside of it.
   console.log(testDeclare);
   console.log(testDeclareAndInitialize);
   console.log(testInitialize);
   console.log(testing);
   console.log(testVariable);
   // Can not access the variable because it has not yet been declared in this function. It is a local scope variable because it is declared in the function.

   let testVariable = "Uh oh.";
   // This is declared and initiallized in the function and can not be hoisted.
   testInitialize = "This is only an initiallization.";
   // This can be defined becuase the declaration below has been hoisted.
}

let testDeclare;
// The declaration of the variable is hoisted so it can be accessed before we log it. This has been declared, but not initiallized. The value is undefined. 
let testDeclareAndInitialize = "This is declared and initiallized."
// This can be hoisted. Since this variable is declared and initiallized in one statement they are both hoisted together.
let testInitialize;
testInitialize = "This is just an initiallization";
// Both the declaration and the initiallization is hoisted to be used even 
testing = "this is the final one";
// Can not initialze a variable that was declared in a function because the variable has local scope.
hoistingTest();
*/










// Exercise 7
// Dive deeper into Closures.
// Create a function that sets up a counter using closures.
// The outer function should define a count variable.
// The inner function should increment and print the count each time it's invoked.
// Starting Code:
/*
function setupCounter() {
    // Define a count variable here

    return function() {
        // Increment and print the count
    }
}

// Create a counter instance and invoke it to test
*/

function setupCounter() {
   let letsCount = 0;
   function counting() {
      letsCount++;
      console.log(letsCount);
      return letsCount;
   }
   return counting();
}
setupCounter();
setupCounter();









// Exercise 8
// Grasp the intricacies of Scope, Hoisting, and Closures combined.
// Create a function that initializes a counter variable. This function should return another function.
// The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
// Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it.
// Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.












// Exercise 9
// Deepen the understanding of Scope interplay with Closures and Hoisting.
// Define two functions: one that modifies a global variable and another that tries to modify a local variable (which is not yet declared).
// Inside the second function, declare and initialize the local variable after attempting to modify it. Observe how hoisting comes into play.
// Now, make use of closures: Modify the first function so that it becomes a factory function returning another function. This inner function should use the outer function's variables.
// Reflect on how the local scope of the outer function is preserved for the inner function through closures, even after the outer function has finished execution.