// Enums -->
// Enums are commonly used when you want to represent a set of related values and choose a value from multiple options.
// They provide a convenient way to define a set of named values and associate them with a specific range.
// In TypeScript, if enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0, 1, and so on.

// Defining an enum for roles
enum Roles {
    user = "user",
    admin = "admin"
}

// Defining a type for login details
type LoginDetails = {
    name?: string; // Optional property
    email: string;
    password: string;
    role: Roles;
};

// Creating user1 of type LoginDetails
const user1: LoginDetails = {
    name: "User1",
    email: "user1@gmail.com",
    password: "user1",
    role: Roles.user
};

// Creating user2 of type LoginDetails
const user2: LoginDetails = {
    name: "User2",
    email: "user2@gmail.com",
    password: "user2",
    role: Roles.admin
};

// Function to check if the user has an admin role
const isAdmin: (user: LoginDetails) => string = (user: LoginDetails): string => {
    const { name, role } = user;
    return role === Roles.admin
        ? `${name} is allowed to edit the website`
        : `${name} is not allowed to edit the website`;
};

// Testing the isAdmin function for both users
console.log(isAdmin(user1)); // Output: User1 is not allowed to edit the website
console.log(isAdmin(user2)); // Output: User2 is allowed to edit the website
