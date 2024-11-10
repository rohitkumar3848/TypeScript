//Type Infernece in TS refers to the abilty of ts compiler to automatically determine and assign types to variables,expressions, and function return values based on their usage and context in the code.
var str = 'Rohit'; // The compiler infers the type string for the variable name.
// str=5; with the help of typerinfernece it show that we can assign number b/z it is string
//Question2-->Calculate Area that takes len,width, of number type parameter and returns their product.
function mul(x, y) {
    return x * y;
}
console.log(mul(5, 5));
