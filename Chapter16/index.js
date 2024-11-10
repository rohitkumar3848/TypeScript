//Interface-->In TS, an interface is a powerful feature that allows you to define a contract for an objects shape.IT sepcifies the properties and their types that an object must have to be considered of that particular interface type.Interfaces are primarlily used for type-vhecking during development and do not generate any JS code at anytime.
var greet = {
    name: "Rohit Kumar",
    age: 21,
};
var product = {
    name: "Laptop",
    price: 30000,
    quantity: 10
};
var calculateTotalPrice = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
console.log(calculateTotalPrice(product));
console.log(product);
