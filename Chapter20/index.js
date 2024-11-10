//Getter and Setter--> with the help of getter we can get the value and with the help of we can set the value and do additional validation.
//Setter and Getter are used to add validations and extra layer of security to 'Private' properties in a class. Those properties are not directly accessible from outside the class and only accessible using Set and Get methods that we define ourselves.
//Example 1-->Bank Account Balance-->
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0; // Initialize balance to 0
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        // Getter method to access the balance
        get: function () {
            return this._balance;
        },
        // Setter method to update the balance with validation
        set: function (amount) {
            if (amount < 0) {
                throw new Error("Negative value not allowed");
            }
            this._balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
// Create an instance of BankAccount
var b1 = new BankAccount();
// Use the setter to set the balance
b1.balance = 1000;
// Use the getter to get the balance
console.log(b1.balance); // Output: 1000
//Example 2--> Temprature Convertor-->
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0; // Initialize Celsius to 0
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        // Getter method to access the Celsius temperature
        get: function () {
            return this._celsius;
        },
        // Setter method to update the Celsius temperature
        set: function (cel) {
            this._celsius = cel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        // Getter method to convert Celsius to Fahrenheit
        get: function () {
            return (this._celsius * 9) / 5 + 32;
        },
        // Setter method to convert Fahrenheit to Celsius
        set: function (fahr) {
            this._celsius = ((fahr - 32) * 5) / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
// Create an instance of the Temperature class
var temp = new Temperature();
// Use the setter to set the temperature in Celsius
temp.celsius = 25;
// Use the getter to get the temperature in Celsius and Fahrenheit
console.log("Temperature in Celsius: ".concat(temp.celsius)); // Output: 25
console.log("Temperature in Fahrenheit: ".concat(temp.fahrenheit)); // Output: 77
// Set the temperature using Fahrenheit
temp.fahrenheit = 98.6;
// Use the getter to get the temperature in Celsius and Fahrenheit
console.log("Temperature in Celsius: ".concat(temp.celsius)); // Output: 37
console.log("Temperature in Fahrenheit: ".concat(temp.fahrenheit)); // Output: 98.6
