// Generics in TypeScript
// Generics allow you to create reusable components or functions that can work with multiple data types.
// This makes the code more flexible and type-safe by letting the type be determined when the function is used.
// 1. Basic Generic Function
// The function `f1<T>` is a generic function where `T` represents a placeholder for a data type.
// It returns a value of type `T`.
function f1(value) {
    return value;
}
// Usage examples for `f1` with different types
console.log(f1(42)); // Works with number, outputs: 42
console.log(f1("name")); // Works with string, outputs: "name"
console.log(f1(true)); // Works with boolean, outputs: true
// Explanation:
// - The `<T>` is a type parameter that can be replaced with any type when calling the function.
// - For example, `<number>` specifies that `T` should be a `number`.
// 2. Generic Function with Multiple Parameters
// The function `add<T>` attempts to add two values of type `T`.
// However, using `+` directly on a generic type may cause an error because `+` is not defined for all types.
function add(a, b) {
    // The code below will throw an error as `+` is not defined for generic types in TypeScript.
    // For numbers or strings, we need to handle them separately.
    if (typeof a === "number" && typeof b === "number") {
        return (a + b); // Works for numbers
    }
    else if (typeof a === "string" && typeof b === "string") {
        return (a + b); // Works for strings
    }
    else {
        throw new Error("Unsupported types for addition");
    }
}
// Correct usage examples for `add` with specific types
console.log(add(5, 10)); // Outputs: 15
console.log(add("Rohit", " Kumar")); // Outputs: "Rohit Kumar"
// Explanation:
// - `add<T>` is a generic function that attempts to add two values of type `T`.
// - We check the type of `a` and `b` using `typeof` to ensure we only add if both are either `number` or `string`.
// - If types other than `number` or `string` are passed, an error is thrown.
// 3. Generic Array Function
// This function accepts an array of generic type `T` and returns the length of the array.
function getArrayLength(arr) {
    return arr.length;
}
console.log(getArrayLength([1, 2, 3, 4])); // Outputs: 4
console.log(getArrayLength(["a", "b", "c"])); // Outputs: 3
// Explanation:
// - `getArrayLength` is a generic function that works with arrays of any type `T`.
// - The function takes an array of type `T[]` as input and returns its length.
// Multiple Type Variables with Generics
// In TypeScript, you can use multiple type variables in generics to handle different data types for different parameters.
// Here, we use two type variables: T and U, which represent different types for the parameters.
function addi(a, b, c) {
    // The function takes three parameters of different types: T, U, and V.
    console.log(typeof a); // Displays the type of the first parameter
    console.log(typeof b); // Displays the type of the second parameter
    console.log(typeof c); // Displays the type of the third parameter
}
// Correct usage examples:
addi(5, "Rohit", true); // Outputs: "number", "string", "boolean"
addi("Rohit", true, 5); // Outputs: "string", "boolean", "number"
// Explanation:
// - The function `addi` is a generic function that accepts three parameters of different types.
// - `T`, `U`, and `V` are generic type placeholders, which can be replaced with any types when calling the function.
// - The `typeof` operator is used to check the type of each parameter at runtime.
// - When calling `addi`, we specify the actual types in angle brackets `<number, string, boolean>`, etc.
