// Class 4 exercise 3

// type Person = {
//    name: String;
//    age: Number;
//    gender: String;
// };

// let student: Person = {
//    name: "Taylor",
//    age: 33,
//    gender: "female",
// };


// Class 6 exercise 3/5

interface Human {
   name: string;
   age: number;
      
}

class Person implements Human {
   constructor(
      public name: string,
      public age: number,
      private address: string[],
   )
   {}  
   
   mailTo(address: string) {
      this.address.push(address)
   };

   
}

const client1 = new Person("Serena", 22, ["165 Cedar Dr"]);
console.log(client1);
