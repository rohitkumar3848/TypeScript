// Interfaces in TypeScript
// In TypeScript, an interface defines the structure of an object. It acts as a contract that specifies the properties and their types that an object must have to be considered of that particular interface type.
// Interfaces are used primarily for type-checking during development and do not generate any JavaScript code at runtime.

// Example 1: Basic Interface

interface Greet {
    name: string;
    age: number;
}

const greet: Greet = {
    name: "Rohit Kumar",
    age: 21,
};

console.log(greet);

// Explanation:
// - The interface `Greet` defines two properties: `name` (a string) and `age` (a number).
// - The object `greet` follows the structure of the `Greet` interface, so it can be assigned the type `Greet`.

// Example 2: Interface for Product

interface Products {
    name: string;
    price: number;
    quantity: number;
}

const product: Products = {
    name: "Laptop",
    price: 30000,
    quantity: 10,
};

// Function to calculate total price of products
const calculateTotalPrice = (product: Products): number => {
    const { price, quantity } = product;
    return price * quantity;
}

console.log(calculateTotalPrice(product)); // Outputs the total price of the product
console.log(product);

// Explanation:
// - The interface `Products` defines three properties: `name`, `price`, and `quantity`, all of which are required.
// - The object `product` implements the `Products` interface, ensuring that it matches the specified structure.
// - The function `calculateTotalPrice` takes a parameter of type `Products` and returns the total cost based on the `price` and `quantity`.

// Key Points about Interfaces:
// 1. **Type Safety**: Interfaces help ensure type safety by specifying the exact structure an object should have.
// 2. **Reusability**: 
