"use strict";
// Lecture 1-->



// console.log("Hello Rohit");
// let num:number=5
// // num="Rohit" not valid beacause it does not allow in ts it can be reassign the same type of value

// num=66;
// console.log(num);

// Lecture 2->


// 1. Write a program to add 2 numbers?
// 2.How to catch Errors and solev it?
// 3. TS Configuration file.
// from this file if there is any error in ts file then the js file doesn't made
// with the help of noEmmiton==true in ts configuration file it will not create the js file if error occur
// ways--> 1. use tsc --noEmitOnError index.ts
//  2. use tsc and enable noEmitOnError=true

// Function define
//@ts-ignore
function sum(a:number,b:number):number{
    return a+b;
}

//Flat Arrow Function-->
const sub=(a:number,b:number):number=>{
    return a-b;
}

//function call->
console.log(sum(5,10));
console.log(sub(10,5));