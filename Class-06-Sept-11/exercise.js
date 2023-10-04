// Exercise 1
// Understand the "this" keyword in different contexts.
// Create three functions: one global, one as an object method, and an arrow function inside an object.
// Print the value of this inside each function.
// Discuss or note down the differences you observe in the value of this across the three scenarios.


/*
function globalFunction() {
   console.log(this.name);
}

globalFunction();
*/






// Exercise 2
// Delve into Object-Oriented Programming by creating and interacting with classes.
// Define a Person class with properties name and age.
// Add a method greet() to this class which outputs a greeting.
// Instantiate two different Person objects and invoke their greet methods.
/*
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   };

   greet() {
      console.log(`Hello ${this.name}. You are ${this.age} years old.`);
   };
};

const singer = new Person("Taylor", 33)
const actor = new Person ("Zendaya", 27)
singer.greet();
actor.greet();
*/







// Exercise 3
// Understand the role of constructor methods within classes.
// Modify your Person class. The constructor should now accept and initialize name and age properties.
// Create two different Person instances with unique names and ages.

// Isn't this the same as exercise 2?






// Exercise 4
// Familiarize with static methods in classes.
// Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
// Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.
/*
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   };

   greet() {
      console.log(`Hello ${this.name}. You are ${this.age} years old.`);
   };

   static info() {
      console.log(`This is a Person class.`);
   };
};
const singer = new Person("Taylor", 33)
const actor = new Person ("Zendaya", 27)
singer.greet();
actor.greet();
Person.info();
singer.info();
// unable to access from the instance becuase static only applies to the class and not the instances.
*/







// Exercise 5
// Implement getters and setters for class properties.
// Within your Person class, add getters and setters for the age property.
// Ensure with the setter that age can't be set to a negative value.
// Instantiate a Person object, try setting a negative age, and observe the results.
/*
class Person {
   #age
   constructor(name, age) {
      this.name = name;
      this.age = age;
   };

   get age() {
      return this.#age;
   }

   set age(value) {
      if (value < 0){
         console.log(`${value} is less than zero.`);
      } else {
         this.#age = value;
      }
   }

   greet() {
      console.log(`Hello ${this.name}. You are ${this.age} years old.`);
   };
};

const singer = new Person("Taylor", 33)
const actor = new Person ("Zendaya", 27)
const kpop = new Person("Sgua", -30)
singer.greet();
actor.greet();
kpop.greet();
// It says the age is undefined.
*/






// Exercise 6
// Understand and implement private fields in classes.
// Visit this repository.
// Click Use this template follow by Create a new repository.
// Give this repository a name of private fields in classes.
// Make sure this is a public repository.
// Read the readMe.md file for further instructions.

class Person {
   #age
   #id
   constructor(name, age, id = 5) {
      this.name = name;
      this.age = age;
      this.id = id;
   };

   get age() {
      return this.#age;
   }

   get id() {
      return this.#id;
   }

   set age(value) {
      if (value < 0){
         console.log(`${value} is less than zero.`);
      } else {
         this.#age = value;
      }
   }

   set id(value) {
      this.#id = Math.round(Math.random() * 100000 * value).toPrecision(6)
   }

   greet() {
      console.log(`Hello ${this.name}. You are ${this.age} years old. ID#${this.id}`);
   };
};

const singer = new Person("Taylor", 33,8)
const actor = new Person ("Zendaya", 27)
const kpop = new Person("Sgua", -30)
singer.greet();
actor.greet();
kpop.greet();
