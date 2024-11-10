// Union Types and Intersection Types in TypeScript
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1. Union Types
// Definition: A union type allows a variable to hold values of multiple types.
// It uses the | (pipe) symbol to define the types that the variable can take.
// Use Case: Useful when a value can be of different types, such as accepting different input types in a function.
// Example: Handling Different Input Types
var inputVal = function (value) {
    console.log("Input Value:", value); // Display the input value
    if (typeof value === 'number') {
        console.log("Number Doubled:", value * 2); // If it's a number, multiply by 2
    }
    else if (typeof value === 'string') {
        console.log("Lowercase String:", value.toLowerCase()); // If it's a string, convert to lowercase
    }
    else if (typeof value === 'boolean') {
        console.log("Boolean Value:", value); // If it's a boolean, just print it
    }
    else {
        throw new Error("Invalid input"); // In case of an unexpected type
    }
};
// Testing with different input types
inputVal(55); // Output: Input Value: 55, Number Doubled: 110
inputVal("Rohit"); // Output: Input Value: Rohit, Lowercase String: rohit
inputVal(true); // Output: Input Value: true, Boolean Value: true
// 2. Union Example: Formatting User Input
// This function returns a formatted string, number, or boolean based on the type of the input
var formatUserInput = function (input) {
    if (typeof input === "string") {
        // Capitalize the first character and make the rest lowercase
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }
    else if (typeof input === "boolean") {
        // Convert boolean to "yes" or "no"
        return input ? "yes" : "no";
    }
    else if (typeof input === "number") {
        // Format the number to two decimal places
        return "$".concat(input.toFixed(2));
    }
    else {
        throw new Error("Invalid input");
    }
};
// Test cases
console.log(formatUserInput("hello world")); // Output: Hello world
console.log(formatUserInput(true)); // Output: yes
console.log(formatUserInput(100)); // Output: $100.00
// Creating an EmployeeDetails object
var emp1 = {
    name: "Rohit",
    age: 21,
    id: 111,
    department: "IT",
};
console.log("Employee Details:", emp1); // Output: Employee Details: { name: 'Rohit', age: 21, id: 111, department: 'IT' }
// Creating an AdminUser object
var adminUser = {
    username: "admin_rohit",
    status: "active",
    role: "admin",
    permissions: ["read", "write", "delete"]
};
console.log("Admin User Details:", adminUser);
// 2. Sample Data
// Creating instances of `User1` and `MyLocation1`
var user = {
    name: "Rohit",
    age: 21
};
var myLocation = {
    city: "Babrala",
    country: "India"
};
// 3. Creating a Combined Profile
// Function to create a new object by merging `User1` and `MyLocation1`
// Uses the spread operator (...) to combine both objects
var createUserProfile = function (user, location) {
    return __assign(__assign({}, user), location);
};
// 4. Merging `user` and `myLocation` to create a complete profile
var myCompleteProfile = createUserProfile(user, myLocation);
// Displaying the combined profile
console.log("Complete User Profile:", myCompleteProfile);
// Output: Complete User Profile: { name: 'Rohit', age: 21, city: 'Babrala', country: 'India' }
// Explanation:
// - `createUserProfile` function merges the `user` and `location` objects using the spread operator `{ ...user, ...location }`.
// - The resulting object contains all the properties from both `User1` and `MyLocation1`.
