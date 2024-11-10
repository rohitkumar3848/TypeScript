// Optional and Default Parameter--> function call with values is called arguements and function deffine with values is parameter, Optional parameters are denotes by appending a ? symbol after the parameter name, and default parameters are specified by providing a default value in parameter declarations.

//Default Para-->
const fn3=(name:string,id:number=1):string=>{ // by default its return type void
    return `Welcome ${name}, your id is ${id}`;
}

console.log(fn3("Rohit Kumar",5));



//Optional Para-->
const fn4=(name:string,id?:number):string=>{ // by default its return type void
    return `Welcome ${name}, your id is optional`;
}

console.log(fn4("Rohit Kumar",5));