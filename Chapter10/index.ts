// Objects --> Represent data in key-value pairs.

// Example with type annotations:

// Defining a type for the object(Type Aliases-->)
//It is  a way to give a name to a spcific type or combination of types.It allows you to create name for a type making it easier to resue and refer to the same type in diferent parts of code. Type aliases provide better readability,organization and abstraction of complex types.

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    greet: () => void;
    address: {
        city: string;
        country: string;
    };
};

// Creating an object of type Person
let obj1: Person = {
    name: "Rohit Kumar",
    age: 21,
    isStudent: true,
    greet: function() {
        console.log(`Hello, ${this.name}`);
    },
    address: {
        city: "Babrala",
        country: "India",
    }
};

// Accessing the properties of the object
console.log("Original Name:", obj1.name);
console.log("Original Age:", obj1.age);
console.log("Is Student:", obj1.isStudent);
console.log("Original Address:", `${obj1.address.city}, ${obj1.address.country}`);

// Calling the greet method
obj1.greet();

// Updating the object's properties
obj1.name = "Rohit K.";
obj1.age = 22;
obj1.isStudent = false;
obj1.address.city = "Agra";
obj1.address.country = "India";

// Adding a new method to greet with a new message
obj1.greet = function() {
    console.log(`Welcome, ${this.name}. You are now ${this.age} years old.`);
};

// Accessing the updated properties
console.log("\nUpdated Name:", obj1.name);
console.log("Updated Age:", obj1.age);
console.log("Updated Is Student:", obj1.isStudent);
console.log("Updated Address:", `${obj1.address.city}, ${obj1.address.country}`);

// Calling the updated greet method
obj1.greet();


//Question-->
type Product={
    name:string;
    price:number;
    quantity:number
};

let obj2:Product={
    name:"Laptop",
    price:40000,
    quantity:10
};

console.log(obj2.name+" "+obj2.price+" "+obj2.quantity);

//Calculate Price-->

//defining
const calculatePrice=(product:Product)=>{
    return product.price*product.quantity;
}


// call
console.log(calculatePrice(obj2));