// How to create a class and also instances of class in Ts-->
// A class in terms of OOP is a blueprint for creating objects
// A class is like a blueprint for creating similiar things.
// PascalCase use for class.
var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Person;
}());
var p1 = new Person("Rohit Kumar", 21, ["Trvelling", "Cricket"]);
console.log(p1);
var p2 = new Person("Rahul Kumar", 23, ["Volleyball", "Cricket"]);
console.log(p2);
