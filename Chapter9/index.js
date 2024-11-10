// Array Operations
var fruits = ["aaa", "bbb", "ccc"];
// Adding elements at the end (using push)
// Definition: Adds one or more elements to the end of an array and returns the new length.
var len = fruits.push("ddd");
console.log("Array length after push:", len);
console.log("Array after push:", fruits);
// Removing elements at the end (using pop)
// Definition: Removes the last element from an array and returns the removed element.
var removedLast = fruits.pop();
console.log("Removed element using pop:", removedLast);
console.log("Array after pop:", fruits);
// Adding elements at the beginning (using unshift)
// Definition: Adds one or more elements to the beginning of an array and returns the new length.
var newLength = fruits.unshift("zzz");
console.log("Array length after unshift:", newLength);
console.log("Array after unshift:", fruits);
// Removing elements from the beginning (using shift)
// Definition: Removes the first element from an array and returns the removed element.
var removedFirst = fruits.shift();
console.log("Removed element using shift:", removedFirst);
console.log("Array after shift:", fruits);
// Iterations
// Using for loop
// Definition: Iterates over the array by index, allowing access to each element.
console.log("Using for loop:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using for...of loop
// Definition: Iterates over the values of the array directly.
console.log("Using for...of loop:");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// Using for...in loop
// Definition: Iterates over the indices of the array.
console.log("Using for...in loop:");
for (var index in fruits) {
    console.log("Index:", index);
    console.log("Value at index:", fruits[index]);
}
// Using forEach loop
// Definition: Executes a provided function for each array element.
console.log("Using forEach loop:");
fruits.forEach(function (fruit, index) {
    console.log("Value:", fruit);
    console.log("Index:", index);
});
// Map and Filter Methods
var arr1 = [1, 2, 3, 4, 5];
// map method
// Definition: Creates a new array by applying a provided function to each element.
var doubleArr1 = arr1.map(function (ele) { return ele * 2; });
console.log("Doubled array:", doubleArr1);
// Convert each number to a string
var str1 = arr1.map(function (ele) { return ele.toString(); });
console.log("Converted to string:", str1);
// filter method
// Definition: Creates a new array with all elements that pass the test implemented by the function.
var evenNumbers = arr1.filter(function (ele) { return ele % 2 === 0; });
console.log("Even numbers:", evenNumbers);
// Get numbers greater than 3
var greaterThan3Number = arr1.filter(function (ele) { return ele > 3; });
console.log("Numbers greater than 3:", greaterThan3Number);
// Practice Questions
// 1. Filter strings with length greater than 4
// Definition: Creates a new array with strings longer than 4 characters.
var s1 = ["aa", "webdcewd", "weh", "asgechj"];
var newS1 = s1.filter(function (s) { return s.length > 4; });
console.log("Strings with length > 4:", newS1);
// 2. Filter strings that start with "a"
// Definition: Creates a new array with strings that start with the letter "a".
// const newS2: string[] = s1.filter((s: string) => s.startsWith('a'));
// console.log("Strings that start with 'a':", newS2);
// Calculating Average and Finding Maximum
var numbers = [10, 20, 30, 40, 50];
// Calculate average
// Definition: Sum all elements and divide by the number of elements to get the average.
var average = numbers.reduce(function (sum, ele) { return sum + ele; }, 0) / numbers.length;
console.log("Average of numbers:", average);
// Find the maximum number
// Definition: Get the highest value in the array using Math.max and the spread operator.
var maxNumber = Math.max.apply(Math, numbers);
console.log("Maximum number:", maxNumber);
