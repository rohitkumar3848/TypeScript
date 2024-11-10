// Array Operations
const fruits: string[] = ["aaa", "bbb", "ccc"];

// Adding elements at the end (using push)
// Definition: Adds one or more elements to the end of an array and returns the new length.
const len = fruits.push("ddd");
console.log("Array length after push:", len);
console.log("Array after push:", fruits);

// Removing elements at the end (using pop)
// Definition: Removes the last element from an array and returns the removed element.
const removedLast = fruits.pop();
console.log("Removed element using pop:", removedLast);
console.log("Array after pop:", fruits);

// Adding elements at the beginning (using unshift)
// Definition: Adds one or more elements to the beginning of an array and returns the new length.
const newLength = fruits.unshift("zzz");
console.log("Array length after unshift:", newLength);
console.log("Array after unshift:", fruits);

// Removing elements from the beginning (using shift)
// Definition: Removes the first element from an array and returns the removed element.
const removedFirst = fruits.shift();
console.log("Removed element using shift:", removedFirst);
console.log("Array after shift:", fruits);

// Iterations
// Using for loop
// Definition: Iterates over the array by index, allowing access to each element.
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using for...of loop
// Definition: Iterates over the values of the array directly.
console.log("Using for...of loop:");
for (const fruit of fruits) {
    console.log(fruit);
}

// Using for...in loop
// Definition: Iterates over the indices of the array.
console.log("Using for...in loop:");
for (const index in fruits) {
    console.log("Index:", index);
    console.log("Value at index:", fruits[index]);
}

// Using forEach loop
// Definition: Executes a provided function for each array element.
console.log("Using forEach loop:");
fruits.forEach((fruit, index) => {
    console.log("Value:", fruit);
    console.log("Index:", index);
});

// Map and Filter Methods
let arr1: number[] = [1, 2, 3, 4, 5];

// map method
// Definition: Creates a new array by applying a provided function to each element.
const doubleArr1: number[] = arr1.map((ele: number) => ele * 2);
console.log("Doubled array:", doubleArr1);

// Convert each number to a string
const str1: string[] = arr1.map((ele: number) => ele.toString());
console.log("Converted to string:", str1);

// filter method
// Definition: Creates a new array with all elements that pass the test implemented by the function.
const evenNumbers: number[] = arr1.filter((ele: number) => ele % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Get numbers greater than 3
const greaterThan3Number: number[] = arr1.filter((ele: number) => ele > 3);
console.log("Numbers greater than 3:", greaterThan3Number);

// Practice Questions
// 1. Filter strings with length greater than 4
// Definition: Creates a new array with strings longer than 4 characters.
const s1: string[] = ["aa", "webdcewd", "weh", "asgechj"];
const newS1: string[] = s1.filter((s: string) => s.length > 4);
console.log("Strings with length > 4:", newS1);

// 2. Filter strings that start with "a"
// Definition: Creates a new array with strings that start with the letter "a".
// const newS2: string[] = s1.filter((s: string) => s.startsWith('a'));
// console.log("Strings that start with 'a':", newS2);

// Calculating Average and Finding Maximum
let numbers: number[] = [10, 20, 30, 40, 50];

// Calculate average
// Definition: Sum all elements and divide by the number of elements to get the average.
const average: number = numbers.reduce((sum, ele) => sum + ele, 0) / numbers.length;
console.log("Average of numbers:", average);

// Find the maximum number
// Definition: Get the highest value in the array using Math.max and the spread operator.
const maxNumber: number = Math.max(...numbers);
console.log("Maximum number:", maxNumber);
