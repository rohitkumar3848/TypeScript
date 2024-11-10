//AnyType-->flexible ty[e in ts,it turns off all type checking for the variables or expressions it is applied to.
var myFavNum = 5;
myFavNum = "Rohit";
myFavNum = true;
//Use Cases--> Working with dynamic data,when dealing with data from dynamic sources like user inputs,n/w res, or desiralized JSON objects,the any type can be useful.
//Migration from js,when migrating an existing js codebase to ts,using any type can be a convienient way to quickly annotate var and func without immediately specyfing their responses.
// unknown Type--> safer alternative to any b/z it still enforces type checking  and type safety.
// Var of type unkown cam hold val of any type ,but you can't mustb perform type checks or type asserations before using them specific ways.
var num2;
num2 = 5;
num2 = "Rohit";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === 'boolean') {
    console.log(num2);
}
// async function fetchData( ):Promise<unknown>{
//     const res=await fetch('http://api.example.com/data');
//     const data=await res.json();
//     return data;
// }
// async function processData() {
//     const res=await fetchData();
//     if(typeof res==='object'){
//         //Perform Operations
//     }
// }
