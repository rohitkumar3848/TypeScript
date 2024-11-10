//BooleanType--> true or false (primitive types)
//Question check Even or not-->
function isEven(num) {
    return (num % 2 === 0);
}
console.log(isEven(10));
//Question isDivisible by 4 and 8-->
function isDivisble(num) {
    return (num % 4 === 0 && num % 8 === 0);
}
console.log(isDivisble(16));
