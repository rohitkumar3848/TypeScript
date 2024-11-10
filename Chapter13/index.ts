// Tuples -->
// Tuples allow storing a fixed-size collection of elements with specific types and order.
// While arrays can hold elements of the same type and their size can vary, tuples have a fixed structure defined at creation.

// Example 1: Representing a person's information using a tuple
// The PersonInfo tuple type contains three elements: a string (name), a number (age), and a boolean (whether the person has a driver's license).

type PersonInfo = readonly [string, number, boolean];

const displayInfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
    const [name, age, hasDL] = person; // Array Destructuring
    console.log(`Name: ${name}, Age: ${age}, DL: ${hasDL ? "Yes" : "No"}`);
};

// Creating instances of PersonInfo
const person1: PersonInfo = ['Rohit', 21, true];
const person2: PersonInfo = ['Rahul', 22, false];

// The following line would cause an error because the order and types must match the tuple definition
// const person3: PersonInfo = [29, 'Rohit', true];

displayInfo(person1); // Output: Name: Rohit, Age: 21, DL: Yes
displayInfo(person2); // Output: Name: Rahul, Age: 22, DL: No

// Example 2: Displaying product information
// The ProductInfo tuple contains three elements: a string (name), and two numbers (price and quantity).

type ProductInfo = readonly [string, number, number];

const displayProductInfo: (p: ProductInfo) => void = (p: ProductInfo): void => {
    const [name, price, quantity] = p;
    console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
};

// Creating instances of ProductInfo
const p1: ProductInfo = ["Laptop", 40000, 10];
const p2: ProductInfo = ["Tablet", 50000, 10];

displayProductInfo(p1); // Output: Name: Laptop, Price: 40000, Quantity: 10
displayProductInfo(p2); // Output: Name: Tablet, Price: 50000, Quantity: 10

// Example 3: Calculating the average grade
// The SubjectGrade tuple contains two elements: a string (subject name) and a number (grade).

type SubjectGrade = readonly [string, number];

const subject1: SubjectGrade = ['Math', 95];
const subject2: SubjectGrade = ['English', 85];
const subject3: SubjectGrade = ['Science', 90];

function calculateAverage(subject1: SubjectGrade, subject2: SubjectGrade, subject3: SubjectGrade) {
    const [, grade1] = subject1;
    const [, grade2] = subject2;
    const [, grade3] = subject3;
    const averageGrade = (grade1 + grade2 + grade3) / 3;
    console.log(`Average Grade is ${averageGrade}`);
}

calculateAverage(subject1, subject2, subject3); // Output: Average Grade is 90

// Example 4: Displaying weather data
// The WeatherData tuple contains three elements: a string (city name), a number (temperature), and another string (weather type).

type WeatherData = [string, number, string];

const city1: WeatherData = ['Patna', 31, 'Haze'];

function displayWeather(city: WeatherData) {
    const [city_name, temp, type] = city;
    console.log(`Temperature in ${city_name} is ${temp}°C and Weather type is ${type}`);
}

displayWeather(city1); // Output: Temperature in Patna is 31°C and Weather type is Haze
