// Define the Person class
// A class serves as a blueprint for creating objects. It defines the properties and methods that 
// each object created from this class will have.
class Person {
    name: string;       // Property to store the person's name
    age: number;        // Property to store the person's age
    hobbies: string[];  // Property to store an array of the person's hobbies

    // Constructor to initialize the properties
    // A constructor is a special function that is automatically called when a new instance of the class is created.
    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;       // Assign the passed 'name' parameter to the 'name' property of the object
        this.age = age;         // Assign the passed 'age' parameter to the 'age' property of the object
        this.hobbies = hobbies; // Assign the passed 'hobbies' parameter to the 'hobbies' property of the object
    }
}

// Create instances of the Person class
// 'p1' is a new object (instance) of the Person class. It is created by calling the constructor and passing the values.
// 'new' keyword is used to create a new object instance from the class.
const p1: Person = new Person("Rohit Kumar", 21, ["Travelling", "Cricket"]);

// Display the object in the console
// This will print: Person { name: 'Rohit Kumar', age: 21, hobbies: [ 'Travelling', 'Cricket' ] }
console.log(p1); 

// Create another instance of the Person class
// 'p2' is another object instance with different values for the properties.
const p2: Person = new Person("Rahul Kumar", 23, ["Volleyball", "Cricket"]);

// Display the object in the console
// This will print: Person { name: 'Rahul Kumar', age: 23, hobbies: [ 'Volleyball', 'Cricket' ] }
console.log(p2);
