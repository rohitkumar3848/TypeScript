//Type Annotation--> It is way of explicitly sepecifying the type of a variable,function parameter, or function return value.
//Type Annotation are expresssed by using a colon(:) followed by the desired type after the variable or function parameter declartion. There can be a space after the colon. 
//Advantage--> 1. It helps the ts compiler to enforce type safety during development,what operation could be performed on that variable or value.
var num = 10;
var myName = "Rohit";
console.log(num);
console.log(myName);
console.log(num.toString());
//Number Type--> numeric values+integergs+floating point number.
// Arithmetic operation such as add,sub,mul,div, the result also number.
var x = 5;
var pi = 3.147;
var negval = -10;
// let invalidResult:number=myAge+"years";
// let invalidResult:number="123";
// let validResult:number=Math.sqrt(16);
//String-->single,double and its result 
var myFullName = "Rohit Kumar";
var myFirstName = "Rohit";
var myLastName = 'Rohit';
myFullName = "Rohit Kumar";
console.log(myFullName);
var message = "Hello TypeScript!";
var len = message.length;
var UCase = message.toUpperCase();
var LCase = message.toUpperCase();
var subString = message.substring(0, 10);
console.log(subString);
// String Comparison
var str1 = "Hello, World!";
var str2 = "Hello, TypeScript!";
var areEqual = (str1 === str2); // Compares the two strings
console.log("Are the strings equal? " + areEqual);
// String Template
var product = "Smartphone";
var price = 499.99;
var m = "The product ".concat(product, " is priced at ").concat(price, " dollars.");
console.log(m);
