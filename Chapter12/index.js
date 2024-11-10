//Enums-->
//It commonly used when you want to represent a set of realated values and choose value from multiple options.It provide convienient way to define a set of named valued and associate them specific range.
//In Ts , when enums constants are not explicitly assigned numeric values ,they are automatically assign increamental numeric values start from 0 , after 1 like that.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "User1",
    email: "user1@gmail.com",
    password: "user1",
    role: Roles.user,
};
var user2 = {
    name: "User2",
    email: "user2@gmail.com",
    password: "user2",
    role: Roles.admin,
};
var isAdmin = function (user1) {
    var name = user1.name, role = user1.role;
    return role === "admin" ? "".concat(name, " is alllow to edit the website") : "".concat(name, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
