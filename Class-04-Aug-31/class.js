// Creating a function
// functions reduce duplication in code
function functions(functionParameter = "parameter default", language = "to code") {
    console.log(`This is the code that will run when you call this function. functionParameter`)

    if (language.toLocaleLowerCase === ["javascript"]) {
      console.log("response");
    } else {
      console.log("other response")
    }
    console.log("third response")
}

function learnToCode(student = "Jacob", language = "to code") {
   if (language.toLocaleLowerCase() === 'javascript') {
      console.log('Are you learning Front-End Development');
   } else {
      console.log('Have you tried Javascript?');
   }
   console.log(`${student} became a developer by learning ${language} with Codefi`);
}

learnToCode();
learnToCode('Nolan');
learnToCode('Joe', 'Java');
learnToCode('Andrew', 'JAVASCRIPT')

// Calling a function
functionName("new value")
// passes a new value into the parameter
functionName();
// use undefined to pass the default parameter if you do not wish to define it.





// Function with Return Values
function gradeAssignment(score = 0) {
   console.log(score);
   return score;
   // return ends the function. anything after return will not run.
}

console.log(gradeAssignment(99));

let grades = gradeAssignment(89);
console.log(grades);




// Anonymous functions & ES6 Arrow function
const learnToCodeES6 = (student) => {
   console.log("hello");
}
learnToCodeES6("Nolan");


const great = function() {
   console.log("hello");
}

great();




// Creating an object

const student = {
   name: "Jacob",
   shouldBuildProjects: true,
   age: "34",
   introduce: function() {
      return `I am ${this.name}`
   },
   motivate: function (reasonForLearningCode) {
      return `I want to learn code so I can ${reasonForLearningCode}`
   }
}


// Accessing object properties

const filterWord = 'name'

console.log("Dot notation:", student.name);
consolge.log("Bracket Notation:", student['name']);
console.log('Dot notation with Variable', student.filterWord);
// the way above does not work
console.log('Bracket notation with variable:', student[filterWord]);



// creating & calling a method on an object
const sayHello = student.introduce();
console.log(sayHello)

const findingYourWhy = student.motivate(`help out my family.`);



// global methods for different data types
const veryHappyGreetings = `I am happy to see you`.toUpperCase();
console.log(veryHappyGreetings)



// global window object
console.log(window);





// common built in string methods
const myString = `        Testing Methods       `;
console.groupCollapsed('String Methods');
console.log('toUpperCase():' , mystring.toUpperCase());
console.log('toLowerCase(:' , mystring.toLocaleLowerCase());
console.log('startsWith():', myString.startsWith('T'));
// returns with true or false
console.log('trim():', myString.trim());
// Only trims white space at the beginning and end of a string
console.log('repeat():', myString.repeat(3));
console.log('charAt():', myString.charAt(9));
console.log('split():', myString.split('Testing'));
// Must be the same case for split to work
console.log('Replace():', myString.replace('methods', 'complete'));
// replaces the first one with the second one


console.groupEnd();


// Introduce common built in number methods
const myNumber = 3.14159263;

console.groupCollapsed('number methods');
console.log(myNumber);
console.log('toString():', myNumber.toString());
console.log('isInteger():', Number.isInteger(myNumber));
console.log('toFixed():', myNumber.toFixed(3));
// rounds to the nth digit
console.log('isNaN():', isNaN(myNumber));
console.groupEnd();





// common built in math methods
// math is meant for simple calculations not complex
console.groupCollapsed('math methods');
console.log('random():', Math.random());
// goes down to the next whole intger
console.log('floor():', Math.floor(3.9865));
// rounds up to the next hwole integer
console.log('ceil():', Math.ceil(3.1));
// goes up to the next whole integer
console.log('round():', Math.round(3.4));
console.log('min():', Math.min(2, 9, 3, 8, 6));
console.log('max():', Math.max(7, 3, 5, 1, 4));
console.groupEnd();





// date

console.log('now():', Date.now());
// returns the miliseconds that have passed since jan 1st 1970

console.log('getDate():', new Date().getDate());




// common built in document methods

console.groupCollapsed('document methods');
console.log('title', document.title);
console.log('URL', document.URL);
console.log('body', document.body);
console.log('images', document.images);
console.log('querySelector():', document.querySelector('h1'));
console.log('createElement()', document.createElement('h1'));
console.groupEnd();




// array methods
const myArray = [1, 'Hello', false, 20, true];

console.groupCollapsed('array methods');

console.log('length', myArray.length);
console.log('push()', myArray.push('lastItem'));
console.log('pop', myArray.pop());
console.log('includes()', myArray.includes('Hello'));
console.log('indexOf()', myArray.indexOf('Hello'));
