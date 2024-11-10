// A typeof guard in Typescript lets you narrow down the type of variable based on its runtime value. In TS, type narrowing allows you to write type-sfe code by ensuring you only operate on the correct type under certain circumstances.This is particularly useful with union types and genrics types.
var favHob = function (hobbies) {
    if (typeof hobbies === 'object' && Array.isArray(hobbies)) {
        return hobbies.map(function () { });
    }
    else {
        console.log(hobbies);
    }
};
favHob("Coding");
favHob(["Cricket", "Tennis", "Coding"]);
