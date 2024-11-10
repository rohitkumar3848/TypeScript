// Objects --> Represent data in key-value pairs.
// Creating an object of type Person
var obj1 = {
    name: "Rohit Kumar",
    age: 21,
    isStudent: true,
    greet: function () {
        console.log("Hello, ".concat(this.name));
    },
    address: {
        city: "Babrala",
        country: "India",
    }
};
// Accessing the properties of the object
console.log("Original Name:", obj1.name);
console.log("Original Age:", obj1.age);
console.log("Is Student:", obj1.isStudent);
console.log("Original Address:", "".concat(obj1.address.city, ", ").concat(obj1.address.country));
// Calling the greet method
obj1.greet();
// Updating the object's properties
obj1.name = "Rohit K.";
obj1.age = 22;
obj1.isStudent = false;
obj1.address.city = "Agra";
obj1.address.country = "India";
// Adding a new method to greet with a new message
obj1.greet = function () {
    console.log("Welcome, ".concat(this.name, ". You are now ").concat(this.age, " years old."));
};
// Accessing the updated properties
console.log("\nUpdated Name:", obj1.name);
console.log("Updated Age:", obj1.age);
console.log("Updated Is Student:", obj1.isStudent);
console.log("Updated Address:", "".concat(obj1.address.city, ", ").concat(obj1.address.country));
// Calling the updated greet method
obj1.greet();
var obj2 = {
    name: "Laptop",
    price: 40000,
    quantity: 10
};
console.log(obj2.name + " " + obj2.price + " " + obj2.quantity);
