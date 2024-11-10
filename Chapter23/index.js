//Interface vs Type-->
//Assign values of both types of object properties
var BioDataI = {
    name: "Rohit",
    age: 21,
    city: "BBA",
    state: "UP",
};
//It says that must assign values of  at least one type
var BioDataU = {
    name: "Rohit",
    age: 21,
    city: "BBA",
    state: "UP",
};
console.log(BioDataU);
//Assign values of both types of object properties
var BioData1 = /** @class */ (function () {
    function BioData1(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    return BioData1;
}());
var std1 = new BioData1("rohit", 21, "BB", "UK");
console.log(std1);
