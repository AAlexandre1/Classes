// Class 4 exercise 3
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.mailTo = function (address) {
        this.address.push(address);
    };
    ;
    return Person;
}());
var client1 = new Person("Serena", 22, ["165 Cedar Dr"]);
console.log(client1);
