// Abstract Classes-->
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// It provide a way to define common properties that multiple derived classes can share.this promotes code resuse and helps to establish a common interface for relates classes.
// It can't be instantiated.
// It focus on class inheritence and sharing common functionality.
//Example --> Suppose you're building a graphics app,and ypu want to create a hierarchy of different shapes. You can see an abstract base class shape to define common properties methods that all shpaes share.
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.display = function () {
        console.log("It is ".concat(this.color, " color and its radius is ").concat(this.radius));
    };
    return Circle;
}(Shape));
var c1 = new Circle("red", 3);
console.log(c1.calArea());
c1.display();
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, side) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.side = side;
        return _this;
    }
    Square.prototype.calArea = function () {
        return this.side * this.side;
    };
    Square.prototype.display = function () {
        console.log("It is ".concat(this.color, " color and its side is ").concat(this.side));
    };
    return Square;
}(Shape));
var s2 = new Square("red", 3);
console.log(s2.calArea());
s2.display();
