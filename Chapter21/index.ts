//Static methods and properties-->

// In TS , static methods and properties belong to the class itself rather than instance of the class. By making methods and properties static , we can acess them direclty from the class without needing to create instance of the class.This is useful for utility functions and properties that don't rely on instance-specific data.

class MathOp {
    public static PI: number = Math.PI; // Static property

    // Static method for addition
    public static add1(n1: number, n2: number): number {
        return n1 + n2;
    }

    // Static method for subtraction
    public static sub1(n1: number, n2: number): number {
        return n1 - n2;
    }
}

// Accessing static properties and methods without creating an instance
console.log(MathOp.PI); // Output: 3.141592653589793
console.log(MathOp.add1(10, 5)); // Output: 15
console.log(MathOp.sub1(10, 5)); // Output: 5
