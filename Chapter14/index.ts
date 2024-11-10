// Union Types and Intersection Types in TypeScript

// 1. Union Types
// Definition: A union type allows a variable to hold values of multiple types.
// It uses the | (pipe) symbol to define the types that the variable can take.
// Use Case: Useful when a value can be of different types, such as accepting different input types in a function.

// Example: Handling Different Input Types
const inputVal = (value: string | number | boolean): void => {
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
}

// Testing with different input types
inputVal(55); // Output: Input Value: 55, Number Doubled: 110
inputVal("Rohit"); // Output: Input Value: Rohit, Lowercase String: rohit
inputVal(true); // Output: Input Value: true, Boolean Value: true

// 2. Union Example: Formatting User Input
// This function returns a formatted string, number, or boolean based on the type of the input
const formatUserInput = (input: string | number | boolean): string | number | boolean => {
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
        return `$${input.toFixed(2)}`;
    } 
    else {
        throw new Error("Invalid input");
    }
}

// Test cases
console.log(formatUserInput("hello world")); // Output: Hello world
console.log(formatUserInput(true)); // Output: yes
console.log(formatUserInput(100)); // Output: $100.00

// 3. Intersection Types
// Definition: An intersection type combines multiple types into a single type using the & (ampersand) symbol.
// It creates a new type that includes all the properties of the combined types.
// Use Case: Useful when you need to represent an object that satisfies multiple type definitions.

// Example: Combining Person and Employee Types
type Person1 = {
    name: string;
    age: number;
}

type Employee = {
    id: number;
    department: string;
}

// Intersection type that combines both Person and Employee properties
type EmployeeDetails = Person1 & Employee; // All properties must be defined

// Creating an EmployeeDetails object
const emp1: EmployeeDetails = {
    name: "Rohit",
    age: 21,
    id: 111,
    department: "IT",
}

console.log("Employee Details:", emp1); // Output: Employee Details: { name: 'Rohit', age: 21, id: 111, department: 'IT' }

// 4. Using Union and Intersection Together
// Example where union is used to accept different types, and intersection is used to combine types
type Status = "active" | "inactive" | "pending"; // Union of string literals

type User = {
    username: string;
    status: Status;
}

type Admin = {
    role: "admin";
    permissions: string[];
}

// Intersection type to combine User and Admin properties
type AdminUser = User & Admin; // Combines User and Admin properties

// Creating an AdminUser object
const adminUser: AdminUser = {
    username: "admin_rohit",
    status: "active",
    role: "admin",
    permissions: ["read", "write", "delete"]
}

console.log("Admin User Details:", adminUser); 
// Output: Admin User Details: { username: 'admin_rohit', status: 'active', role: 'admin', permissions: ['read', 'write', 'delete'] }

// Key Points to Remember:
// 1. Union (|): Allows a variable to have one of several types.
// 2. Intersection (&): Combines multiple types into one, requiring all properties to be provided.
// 3. Type Narrowing: TypeScript uses type guards (typeof, instanceof) to narrow down the type in unions.




// Combining Two Types in TypeScript

// 1. Types Definition
// - `User1` represents basic user information, including name and age.
// - `MyLocation1` represents the location details, including city and country.

type User1 = {
    name: string;
    age: number;
}

type MyLocation1 = {
    city: string;
    country: string;
}

// 2. Sample Data
// Creating instances of `User1` and `MyLocation1`

const user: User1 = {
    name: "Rohit",
    age: 21
};

const myLocation: MyLocation1 = {
    city: "Babrala",
    country: "India"
};

// 3. Creating a Combined Profile
// Function to create a new object by merging `User1` and `MyLocation1`
// Uses the spread operator (...) to combine both objects

const createUserProfile = (user: User1, location: MyLocation1): User1 & MyLocation1 => {
    return { ...user, ...location };
}

// 4. Merging `user` and `myLocation` to create a complete profile
const myCompleteProfile: User1 & MyLocation1 = createUserProfile(user, myLocation);

// Displaying the combined profile
console.log("Complete User Profile:", myCompleteProfile);
// Output: Complete User Profile: { name: 'Rohit', age: 21, city: 'Babrala', country: 'India' }

// Explanation:
// - `createUserProfile` function merges the `user` and `location` objects using the spread operator `{ ...user, ...location }`.
// - The resulting object contains all the properties from both `User1` and `MyLocation1`.

