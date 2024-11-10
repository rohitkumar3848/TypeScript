// Tuples -->
// Tuples allow storing a fixed-size collection of elements with specific types and order.
// While arrays can hold elements of the same type and their size can vary, tuples have a fixed structure defined at creation.
var displayInfo = function (person) {
    var name = person[0], age = person[1], hasDL = person[2]; // Array Destructuring
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", DL: ").concat(hasDL ? "Yes" : "No"));
};
// Creating instances of PersonInfo
var person1 = ['Rohit', 21, true];
var person2 = ['Rahul', 22, false];
// The following line would cause an error because the order and types must match the tuple definition
// const person3: PersonInfo = [29, 'Rohit', true];
displayInfo(person1); // Output: Name: Rohit, Age: 21, DL: Yes
displayInfo(person2); // Output: Name: Rahul, Age: 22, DL: No
var displayProductInfo = function (p) {
    var name = p[0], price = p[1], quantity = p[2];
    console.log("Name: ".concat(name, ", Price: ").concat(price, ", Quantity: ").concat(quantity));
};
// Creating instances of ProductInfo
var p1 = ["Laptop", 40000, 10];
var p2 = ["Tablet", 50000, 10];
displayProductInfo(p1); // Output: Name: Laptop, Price: 40000, Quantity: 10
displayProductInfo(p2); // Output: Name: Tablet, Price: 50000, Quantity: 10
var subject1 = ['Math', 95];
var subject2 = ['English', 85];
var subject3 = ['Science', 90];
function calculateAverage(subject1, subject2, subject3) {
    var grade1 = subject1[1];
    var grade2 = subject2[1];
    var grade3 = subject3[1];
    var averageGrade = (grade1 + grade2 + grade3) / 3;
    console.log("Average Grade is ".concat(averageGrade));
}
calculateAverage(subject1, subject2, subject3); // Output: Average Grade is 90
var city1 = ['Patna', 31, 'Haze'];
function displayWeather(city) {
    var city_name = city[0], temp = city[1], type = city[2];
    console.log("Temperature in ".concat(city_name, " is ").concat(temp, "\u00B0C and Weather type is ").concat(type));
}
displayWeather(city1); // Output: Temperature in Patna is 31°C and Weather type is Haze
