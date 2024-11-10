//Static methods and properties-->
// In TS , static methods and properties belong to the class itself rather than instance of the class. By making methods and properties static , we can acess them direclty from the class without needing to create instance of the class.This is useful for utility functions and properties that don't rely on instance-specific data.
var MathOp = /** @class */ (function () {
    function MathOp() {
    }
    MathOp.add1 = function (n1, n2) {
        return n1 + n2;
    };
    MathOp.sub1 = function (n1, n2) {
        return n1 - n2;
    };
    MathOp.PI = Math.PI;
    return MathOp;
}());
console.log(MathOp.PI);
console.log(MathOp.add1(10, 5));
console.log(MathOp.sub1(10, 5));
