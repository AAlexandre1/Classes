/*
const classroom = {
   name: "High Five",
   student: ["Sally", "Jim", "Karen"],
   printStudents: function() {
      console.log("'this' in implicit scope:", this.students);
   },
};

classroom.printStudents();
// prints the student array
console.log(this);
// logs the window
*/

/*
const getName = function() {
   console.log("'This in explicit scope'", this.name);
};

const player = {
   name: "Lebron",
   isHappy: true,
};

getName.call(player);
*/

// Class

/*
class names must start with uppercase
class Animal {
   constructor() {
      this.name = name;
   }

   speak() {
      console.log(`${this.name} makes a sound!`);
      //do not need to write 'function' to declare a function in a class 
   }
   
}

const dog = new Animal('gizmo');
dog.speak();

const cat = new Animal("jiji");
cat.speak();
*/

/*
class Rectangle {
   constructor(width, height) {
      this.width = width;
      this.height =  height;
   }

   get area() {
      return this.width * this.height
   }

   set dimensions(value) {
      [this.width, this.height] = value;
   }
}

const rect1 = new Rectangle(4, 5);
console.log((rect1.area));

rect1.dimesion = [2,3];
console.log((rect1.area));
*/

class Calculator {
   static add(a,b) {
      return a+b;
   }
}

console.log(Calculator.add(a,5));


class Circle {
   // # makes it private
   #radius;

   constructor(radius) {
   this.#radius = radius
   }
   getArea() {return Math.PI * this.#radius * this.#radius;
   }
}

const circle = new Circle(5);
console.log(circle.radius);