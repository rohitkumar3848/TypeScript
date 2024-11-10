//BooleanType--> true or false (primitive types)

//Question check Even or not-->

function isEven(num:number):boolean{
    return (num%2===0);
}

console.log(isEven(10));


//Question isDivisible by 4 and 8-->

function isDivisble(num:number):boolean{
    return (num%4===0 && num%8===0);
}

console.log(isDivisble(16));


// BigInt Type --> Working with large numbers

// Declaration of a BigInt variable
let bigNum: bigint = 9007199254740991n;
console.log("Big Number:", bigNum);

// Display the maximum safe integer in JavaScript
let y = Number.MAX_SAFE_INTEGER;
console.log("Max Safe Integer:", y);

// Perform arithmetic operations with BigInt
let bigNum1: bigint = 9007199254740991n;
let bigNum2: bigint = 9007199254740992n;

// Addition
let sum: bigint = bigNum1 + bigNum2;
console.log("Sum:", sum);

// Subtraction
let difference: bigint = bigNum1 - bigNum2;
console.log("Difference:", difference);

// Multiplication
let pro: bigint = bigNum1 * bigNum2;
console.log("Product:", pro);

// Division
let quotient: bigint = bigNum1 / bigNum2;
console.log("Quotient:", quotient);
