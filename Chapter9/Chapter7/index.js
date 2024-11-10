// Optional and Default Parameter--> function call with values is called arguements and function deffine with values is parameter, Optional parameters are denotes by appending a ? symbol after the parameter name, and default parameters are specified by providing a default value in parameter declarations.
//Default Para-->
var fn3 = function (name, id) {
    if (id === void 0) { id = 1; }
    return "Welcome ".concat(name, ", your id is ").concat(id);
};
console.log(fn3("Rohit Kumar", 5));
//Optional Para-->
var fn4 = function (name, id) {
    return "Welcome ".concat(name, ", your id is optional");
};
console.log(fn4("Rohit Kumar", 5));
