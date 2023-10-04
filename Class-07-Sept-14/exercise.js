// Use notes, code snippets, Google searches, and other resources to help you complete these exercises. Be sure to lean on your Code Coaches, Slack and your peers for help as well.
// Once completed with an exercise, commit your code to a GitHub repository.


// Exercise 1
// Understand the Observer design pattern.
// Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
// When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
// Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.

class Subject {
   constructor() {
      this.observers = [];
   }

   addObserver(observer) {
      this.observers.push(observer);
   }
   
   // set observerIndex(observer) {
   //    return this.observers.findIndex(observer)
   // };

   // removeObserver(observer) {
   //    this.observers.splice(observerIndex(observer), 1);
   // }

   notifyObservers() {
      this.observers.forEach((observer) => Observer.update(observer));
      return 
   }
}

class Observer {
   update() {
      console.log('Observer updated!');
   }
}

// const observerGroup = new Subject();
// observerGroup.addObserver("John");
// observerGroup.addObserver("Molly");
// observerGroup.addObserver("Kevin")
// console.log(observerGroup); 
// observerGroup.removeObserver("Molly")
// observerGroup.notifyObservers();












// Exercise 2
// Objective: Understand and Apply Destructuring in JavaScript.
// Destructure the person object to extract the name and age properties into variables.
// Use array destructuring to get the second and fourth items from the fruits array.
// Extract the city and country properties from the address object nested within the person object using nested destructuring.

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];






// Exercise 3




// Exercise 4





// Exercise 5






// Exercise 6