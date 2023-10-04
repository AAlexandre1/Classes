// hoisting
// a variable must be declared before it is used
// a function can use variables declared anywhere including after the function

// scope
// a variable declared outside of a block is available globally
// a variable declared in a block is only available in the scope of the block
// var can not be accessed outside of a function
// var can be accessed outside of a loop or if statement








// closures
// a closure is a function that can remember the outer variables and remember them.
// the parent function will not be able to access the variables of the child functions
// the child functions will be able to access the variables of the outer functions
function getName() {
   let fName = "Joe"
   console.log("Outer", fName);
   function getLastName() {
      let lName = "Letner"
      console.log("inner", fName, lName);
      function getMName() {
         let mName = "NOPE";
         console.log(lName, fName, mName);
      }
      getMName();
   }
   getLastName();
   console.log(lName);
   // can not access the variable in the inner function
}

getName();



function test() {
   let ftest = "test";
   return ftest;
   // using return allows the parent function to access the results of the child functon. It still can not acces the variables of the child function.
}
test();
console.log(ftest);
// can not call a variable initiallized in the function
