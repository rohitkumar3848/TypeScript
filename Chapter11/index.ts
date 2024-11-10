// Call Signatures in TypeScript
// Definition: It refers to the declarations of a function, which include the function's name, parameters, and return type. 
// It defines the structure and type information without including the function's implementation or body.
// Typically used inside object type notations to describe the shape of functions within object types.

// Defining a type for a Student object with a call signature for the greet function
type Student = {
    name: string;
    age: number;
    gender?: string; // Optional property
    greet: (country: string) => string; // Call signature for greet function
    // Alternative way to define a call signature
    // (country: string): string;
};

// Creating an object of type Student
const s11: Student = {
    name: "Rohit Kumar",
    age: 21,
    greet: (country: string): string => `Welcome ${s11.name}, your age is ${s11.age}, you are from ${country}`
};

// Function to introduce a student
const intro: (student: Student) => string = (student: Student): string => {
    const { name, age } = student;
    return `Welcome! My name is ${name}, I am ${age} years old.`;
};

// Testing the greet function with the object
console.log(s11.greet("India"));

// Testing the intro function with the object
console.log(intro(s11));
