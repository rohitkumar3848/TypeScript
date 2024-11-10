// A typeof guard in Typescript lets you narrow down the type of variable based on its runtime value. In TS, type narrowing allows you to write type-sfe code by ensuring you only operate on the correct type under certain circumstances.This is particularly useful with union types and genrics types.

const favHob = (hobbies: string | string[]): void => {
    if (typeof hobbies === 'object' && Array.isArray(hobbies)) {
        hobbies.map(hobby => console.log(hobby));
    } else {
        console.log(hobbies);
    }
};

favHob("Coding"); // Output: "Coding"
favHob(["Cricket", "Tennis", "Coding"]); // Output: "Cricket", "Tennis", "Coding"

