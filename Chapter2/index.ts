//Type Annotation--> It is way of explicitly sepecifying the type of a variable,function parameter, or function return value.
//Type Annotation are expresssed by using a colon(:) followed by the desired type after the variable or function parameter declartion. There can be a space after the colon. 
//Advantage--> 1. It helps the ts compiler to enforce type safety during development,what operation could be performed on that variable or value.




let num:number=10;
let myName:string="Rohit";


console.log(num);
console.log(myName);
console.log(num.toString());

//Number Type--> numeric values+integergs+floating point number.
// Arithmetic operation such as add,sub,mul,div, the result also number.

let x:number=5;
let pi:number=3.147;
let negval:number=-10;

// let invalidResult:number=myAge+"years";
// let invalidResult:number="123";
// let validResult:number=Math.sqrt(16);

//String-->single,double and its result 

var myFullName="Rohit Kumar";
var myFirstName="Rohit";
var myLastName='Rohit';
myFullName="Rohit Kumar";
console.log(myFullName);

let message:string="Hello TypeScript!";
let len:number=message.length;
let UCase:string=message.toUpperCase();
let LCase:string=message.toUpperCase();
let subString:string=message.substring(0,10);
console.log(subString);
// String Comparison
let str1: string = "Hello, World!";
let str2: string = "Hello, TypeScript!";
let areEqual: boolean = (str1 === str2); // Compares the two strings

console.log("Are the strings equal? " + areEqual);


// String Template
let product: string = "Smartphone";
let price: number = 499.99;
let m: string = `The product ${product} is priced at ${price} dollars.`;

console.log(m);






