// Inheritance in TypeScript
// Inheritance allows a class (child/subclass) to reuse the functionality of an existing class (parent/superclass) 
// without rewriting it. The subclass can add new methods or properties and also override existing methods.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define the base class 'Persons'
var Persons = /** @class */ (function () {
    // Constructor to initialize the properties
    function Persons(name, age, hobbies) {
        this.name = name; // Assigns the name parameter to the name property of the object
        this.age = age; // Assigns the age parameter to the age property of the object
        this.hobbies = hobbies; // Assigns the hobbies parameter to the hobbies property of the object
    }
    // Method to introduce the person
    Persons.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(', '), ".");
        // Joins hobbies array into a comma-separated string
    };
    return Persons;
}());
// Define the subclass 'Student' that extends the 'Persons' class
// 'extends' keyword is used to indicate that Student is inheriting from Persons
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // Constructor for the Student class
    // The 'super' keyword is used to call the constructor of the parent class (Persons) 
    // and pass the relevant parameters (name, age, hobbies)
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this; // Calls the parent class's constructor to initialize inherited properties
        _this.grade = grade; // Assigns the grade parameter to the grade property of the Student
        return _this;
    }
    // Override the 'introduce' method to add grade-specific information
    Student.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ". I am in grade ").concat(this.grade);
        // Uses 'super.introduce()' to call the 'introduce' method from the parent class and adds additional info
    };
    return Student;
}(Persons));
// Create an instance of the 'Persons' class
var p3 = new Persons("Rohit Kumar", 21, ["Travelling", "Cricket"]);
console.log(p3.introduce());
// Output: Hi, I'm Rohit Kumar and I'm 21 years old. I love Travelling, Cricket.
// Create an instance of the 'Student' class
var s1 = new Student("Rahul Kumar", 23, ["Volleyball", "Cricket"], 'A');
console.log(s1.introduce());
// Output: Hi, I'm Rahul Kumar and I'm 23 years old. I love Volleyball, Cricket. I am in grade A.
// Access Modifiers in TypeScript:
//            | Parent Class | Child Class | Outside Class |
//  Public    | Yes          | Yes         | Yes           |
//  Protected | Yes          | Yes         | No            |
//  Private   | Yes          | No          | No            |
// Explanation of Access Modifiers:
// 1. Public: Accessible from anywhere. In the example, 'name' is a public property and can be accessed directly (e.g., p3.name).
// 2. Protected: Accessible within the class and its subclasses. In the example, 'age' is protected, so it can only be accessed inside 'Persons' and 'Student', not outside (e.g., accessing s1.age will cause an error).
// 3. Private: Accessible only within the class itself. If there were a private property in the 'Persons' class, it would not be accessible in the 'Student' subclass or outside classes.
