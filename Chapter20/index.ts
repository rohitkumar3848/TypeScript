//Getter and Setter--> with the help of getter we can get the value and with the help of we can set the value and do additional validation.
//Setter and Getter are used to add validations and extra layer of security to 'Private' properties in a class. Those properties are not directly accessible from outside the class and only accessible using Set and Get methods that we define ourselves.


//Example 1-->Bank Account Balance-->

class BankAccount {
    private _balance: number = 0; // Initialize balance to 0

    // Getter method to access the balance
    public get balance(): number {
        return this._balance;
    }

    // Setter method to update the balance with validation
    public set balance(amount: number) {
        if (amount < 0) {
            throw new Error("Invalid Balance");
        }
        this._balance = amount;
    }
}

// Create an instance of BankAccount
const b1: BankAccount = new BankAccount();

// Use the setter to set the balance
b1.balance = 1000;

// Use the getter to get the balance
console.log(b1.balance); // Output: 1000


//Example 2--> Temprature Convertor-->

class Temperature {
    private _celsius: number = 0; // Initialize Celsius to 0

    // Getter method to access the Celsius temperature
    public get celsius(): number {
        return this._celsius;
    }

    // Setter method to update the Celsius temperature
    public set celsius(cel: number) {
        
        this._celsius = cel;
    }

    // Getter method to convert Celsius to Fahrenheit
    public get fahrenheit(): number {
        return (this._celsius * 9) / 5 + 32;
    }

    // Setter method to convert Fahrenheit to Celsius
    public set fahrenheit(fahr: number) {
        this._celsius = ((fahr - 32) * 5) / 9;
    }
}

// Create an instance of the Temperature class
const temp:Temperature = new Temperature();

// Use the setter to set the temperature in Celsius
temp.celsius = 25;

// Use the getter to get the temperature in Celsius and Fahrenheit
console.log(`Temperature in Celsius: ${temp.celsius}`); // Output: 25
console.log(`Temperature in Fahrenheit: ${temp.fahrenheit}`); // Output: 77

// Set the temperature using Fahrenheit
temp.fahrenheit = 98.6;

// Use the getter to get the temperature in Celsius and Fahrenheit
console.log(`Temperature in Celsius: ${temp.celsius}`); // Output: 37
console.log(`Temperature in Fahrenheit: ${temp.fahrenheit}`); // Output: 98.6
