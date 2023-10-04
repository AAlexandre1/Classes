// ! Data Types

// *Strings
"Strings can use double quotes"
'strings can use single quotes'
`strings can use back ticks, back tick is the key next to the one`






// *Specials
null;
// this variable is nothing
undefined;
// this variable is not yet defined
NaN;
// you tried to put something other than a number where a number belongs

// *Objects
// objects are wrapped between curly braces
// needs to be stored in a variable
const characterOne = {
   name: "clifford",
   animal: 'dog',
   features: ['big', 'red']
};


const characterTwo = {
   name: "garfield",
   animal: 'cat',
   features: ["lazy", "hungry"],
   favFood: "lasagna"
};

console.log (characterTwo.favoriteFood);
// the result would be lasagna since that is the 

console.log (characterOne.favoriteFood);
// result would be null becuase favorite food was never defined for the object character one


// *Arrays
const miscArr= ["bananas", "chocolate", 1, [2,3], {name: "clifford", animal: "dog"}, characterTwo]

// arrays start with number 0


// an array of objects
const students =[
   {
      name: 'Alice',
      isEnrolled: true,
   },
   {
      name: "Tyler",
      isEnrolled: true,
   },
];

// *Variables
// var
// // use let instead of var
// let
// const
var myFavNum = 33;
myFavNum = 22;
// var allows you to redefine the variable

const myFavNum2 = 34;
myFavNum2 = 56;
// const does not allow you to redefine a variable

myFavNum3 = 43;
let myFavNum3 = 28;

// must declare the variable before you can change it.
// wherever you declare a var variable the var jumps to the top of the page so it doesn't matter where you declare it. This can cause issues with finding errors. 


// *String Concatenation
const greeting = 'Hi';
const nameOne = 'garfield';
const dayMessage = greeting + " " + nameOne;
// will print Hi garfield

const nightMessage = `${greeting}, ${nameOne}`;
// will print Hi, garfield

// *Operation
// Addition +
// Subtraction -
// Multiplication *
// Division /
// Greater Than >
// Less Than <
// And &&
// Or ||
// Not/Opposite !
// Modulo %
// Modulo is the remainder left after division
// Equivalent === ==
// === strict equality
// "2" === 2 would be false since they are different data types
// == is less strict
// "2" ==2 would be true since their content is equal
// To the power of **



// *Conditionals
if (condition) {
   // run this code
} else {
   // run this code
};

const baseballGame= {
   teams: ["cardinals", "cubs"],
   winner: "cubs",
   score: {
      cardinals: 1,
      cubs: 0,
   }
};

if (baseballGame.winner === "cardinals") {
   alert ("Yay!");
} else if (baseballGame.winner === "cubs") {
   alert("better luck next time");
} else {
   alert ("Uh Oh...");
};


// loops
const charactersArr = [
characterOne, 
characterTwo,
{name: 'Goofy'},
{name: "test"},
];

// ! iteration one
// i = 0
// 0 < 4 true
// add one to i
// run code
// print value of i (0)
// print character name at index 0
// add one to i
// ! iteration two
// i = 1
// i < 4
// after running ConvolverNode, add one to i

for (let i = 0; i < charactersArr.length; i++) {
   console.log ( "i:", i);
   console.log( "Character Name:", charactersArr(i).name);
};



const studentsArr = [
   "Amanda",
   "Luci",
   "Monique",
   "Shaun",
]

studentsArr.forEach((student) => {
   // will run a code for each itemin the array
   const greeStudent = `Hi, ${student}. Welcome to CodeLabs`;
})


let i= 0;
while (i < studentsArr.length) {
   
   i++;
};


do {
   // code here
} while ( 
   i < 5
   // condition here
);

