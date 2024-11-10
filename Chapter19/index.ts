// Inheritance in TypeScript
// Inheritance allows a class (child/subclass) to reuse the functionality of an existing class (parent/superclass) 
// without rewriting it. The subclass can add new methods or properties and also override existing methods.


// Define the base class 'Persons'
class Persons {
    public name: string;       // Public property: can be accessed from anywhere (inside or outside the class)
    public age: number;     // Protected property: can only be accessed within the class and its subclasses
    public hobbies: string[];         // Default access (public), can be accessed from anywhere

    // Constructor to initialize the properties
    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;       // Assigns the name parameter to the name property of the object
        this.age = age;         // Assigns the age parameter to the age property of the object
        this.hobbies = hobbies; // Assigns the hobbies parameter to the hobbies property of the object
    }

    //ShortHand Properties--> This is an shortthand way to define the properties. without declation we can used in that way.
    // constructor(public name: string, public age: number, public hobbies: string[]){}

    // Method to introduce the person
    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(', ')}.`; 
        // Joins hobbies array into a comma-separated string
    }
}

// Define the subclass 'Student' that extends the 'Persons' class
// 'extends' keyword is used to indicate that Student is inheriting from Persons
class Student extends Persons {
    grade: string;  // Additional property specific to the Student class

    // Constructor for the Student class
    // The 'super' keyword is used to call the constructor of the parent class (Persons) 
    // and pass the relevant parameters (name, age, hobbies)
    constructor(name: string, age: number, hobbies: string[], grade: string) {
        super(name, age, hobbies); // Calls the parent class's constructor to initialize inherited properties
        this.grade = grade;        // Assigns the grade parameter to the grade property of the Student
    }

    //Shorthand Properties way to define properties-->
    // constructor(name: string, age: number, hobbies: string[],public grade: string) {
    //     super(name, age, hobbies); // Calls the parent class's constructor to initialize inherited properties
    // }

    // Override the 'introduce' method to add grade-specific information
    introduce(): string {
        return `${super.introduce()}. I am in grade ${this.grade}`; 
        // Uses 'super.introduce()' to call the 'introduce' method from the parent class and adds additional info
    }
}

// Create an instance of the 'Persons' class
const p3: Persons = new Persons("Rohit Kumar", 21, ["Travelling", "Cricket"]);
console.log(p3.introduce()); 
// Output: Hi, I'm Rohit Kumar and I'm 21 years old. I love Travelling, Cricket.

// Create an instance of the 'Student' class
const s1: Student = new Student("Rahul Kumar", 23, ["Volleyball", "Cricket"], 'A');
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

