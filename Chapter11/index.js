// Call Signatures in TypeScript
// Definition: It refers to the declarations of a function, which include the function's name, parameters, and return type. 
// It defines the structure and type information without including the function's implementation or body.
// Typically used inside object type notations to describe the shape of functions within object types.
// Creating an object of type Student
var s11 = {
    name: "Rohit Kumar",
    age: 21,
    greet: function (country) { return "Welcome ".concat(s11.name, ", your age is ").concat(s11.age, ", you are from ").concat(country); }
};
// Function to introduce a student
var intro = function (student) {
    var name = student.name, age = student.age;
    return "Welcome! My name is ".concat(name, ", I am ").concat(age, " years old.");
};
// Testing the greet function with the object
console.log(s11.greet("India"));
// Testing the intro function with the object
console.log(intro(s11));
