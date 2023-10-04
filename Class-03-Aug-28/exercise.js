// Exercise 1
console.log("Hello, World!");



// Exercisee 2
let myName = "Astacia";
console.log(myName);



// Exercise 3
 
shape = {
   name: "rectangle",
   length: 4,
   width: 7,
   color: "blue",
};

let area = shape.length * shape.width;
console.log(area);



// Exercise 4
let n = 7
if (n % 2 == 0) {
   console.log (`${n} is an even number.`);
} else {
   console.log (`${n} is an odd number`);
};



// Exercise 5
console.groupCollapsed("Exercise 5");
for (let i = 0; i < 10; i++){
   console.log(`Number ${i}`);
};
console.groupEnd();


// Exercise 6
const yourName = prompt("What is your name?");
console.log (`Hello ${yourName}, nice to see you here.`);




// Exercise 7
// let finalNum = 1;
// let yourNum = prompt("Enter a number.");
// for (yourNum > 1; yourNum--) {
//    finalNum = finalNum * yourNum;
//    console.log(finalNum);
// };

// let finalNum = 1;
// let yourNum = prompt("Enter a number.");
// for (yourNum > 1; yourNum--;) {
//    finalNum = finalNum * yourNum;
//    console.log(finalNum);
//    yourNum--;
// };

let finalNum = 1;
let yourNum = prompt("Enter a number.");
while (yourNum > 1) {
   finalNum = finalNum * yourNum;
   yourNum--;
};
console.log(finalNum);



// Exercise 8
let year = prompt('Enter a year.');
if (year % 4 == 0) {
   console.log (`This year, ${year}, is a leap year.`)

} else  if (year % 4 !== 0) {
   console.log (`This year, ${year}, is not a leap year.`)
} else {
   console.log (`${year} is not a year.`)
};



// Exercise 9
let num = 0;
let count = 0;
while (num < 100) {
   count = count + (num + 1);
   num++;
};
console.log(count);


// Exercise 10

let num1 = prompt("Enter a number.");
let num2 = prompt("Enter another number.");
num1 = parseInt(num1);

// Doing it this way only puts the two numbers together instead of adding them.
let resultAdd = parseInt(num1) + parseInt(num2);
console.log(`${num1} + ${num2} = ${resultAdd}.`);

// It subtracts the larger number from the smaller number if the larger number startes with a number smaller than the larger number. E.g. 18 and 7
let resultSub;
if (parseInt(num1) > parseInt(num2)) {
   resultSub = num1 - num2;
   console.log(`${num1} - ${num2} = ${resultSub}.`);
} else {
   resultSub = num2 - num1;
   console.log(`${num2} - ${num1} = ${resultSub}.`);
};

let resultMul = num1 * num2;
console.log(`${num1} times ${num2} equals ${resultMul}.`);

let resultDiv;
if (num1 > num2) {
   resultDiv = num1 / num2;
   console.log(`${num1} divided by ${num2} equals ${resultDiv}.`);
} else {
   resultDiv = num2 / num1;
   console.log(`${num2} divided by ${num1} equals ${resultDiv}.`)
};


// Exercise 11
let thisString = "This is a string.";
let thisNum = 5;
let thisBool = true;
let thisNull = null;
let thisUndef = undefined;
// should I use let or const to define an object or array?
const car = {
   color: "blue",
   id: 39815,
   size: "large",
   type: "sedan",
   doors: 4,
   sunroof: true,
};
let thisObj = car.size;
const horses = [
   "Pinto",
   "Apaloosa",
   "Curly",
   "Clydesdale",
   "Shetland",
   "Falabella",
];
let thisArr = horses[3];
let thisNo;
// Is a varable that has an undefined value the same as a variable that has no default value declaration?



// Exercise 12
// Is a list of objects just an array?
let foodList = document.querySelector("exercise.html.food");
const foodItems = [
   {
      name: "Pizza",
      price: "$8.75",
   },
   {
      name: "Miso Ramen",
      price: "$7.25",
   },
   {
      name: "Chicken Salad",
      price: "$6.50",
   },
   {
      name: "Oolong Tea",
      price: "$2.50",
   },
   {
      name: "Matcha Latte",
      price: "$4.75",
   },
];
const ul = document.getElementById("food");
for (const i of foodItems) {
   const li = document.createElement("li");
   li.textContent = i.name;
   ul.appendChild(li);
};

// Uncaught TypeError: Cannot read properties of null (reading 'appendChild')





// Exercise 13
// Getting error: Uncaught TypeError: Cannot read properties of undefined (reading 'push')

let numArr = prompt ("Enter a number between 1 and 100.");
let arrLength = prompt ("Enter another number between 1 and 100.");
numArr = parseInt(numArr);
arrLength = parseInt(arrLength);

function multipleTable(numArr, arrLength) {
   let multiples = [];
   for (let i = 1; i <= arrLength; i++) {
      multiples.push(numArr * i);
   }
   return multiples
};
const multiples = multipleTable(numArr, arrLength)
console.log(multiples);

/*
let countArr = 1;
let arrayMultiples = [];
let ansArr = 0;
while (arrLength > 0) {
   ansArr = numArr * countArr;
   arrayMultiples.push(ansArr);
   arrLength--;
   countArr++;
};
*/


// console.log (`The first ${arrLength} multiples of ${numArr} are: ${arrayMultiples}.`);




// Exercise 14
let numType = prompt("Please enter a number between -100 and 100.")
if (numType > 0) {
   console.log(`Your number, ${numType} is a positive number.`)
} else if (numType < 0) {
   console.log(`Your number, ${numType} is a negative number.`)
} else {
   console.log(`Your number, ${numType} is zero.`)
};



// Exercise 15
let countTab = 1;
let numTab = prompt(`Enter a number to see a multiplication table up to 10.`)
let ansTab;
console.groupCollapsed("Multiplication table");
console.log(`The mulitplication table for ${numTab} is:`)
while (countTab <= 10) {
   ansTab = numTab * countTab;
   console.log(ansTab);
   countTab++;
};
console.groupEnd();



// Exercise 16
let numPrime = prompt(`Enter a number to see if it is a prime number.`);

