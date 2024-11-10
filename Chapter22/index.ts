// Abstract Classes-->

// It provide a way to define common properties that multiple derived classes can share.this promotes code resuse and helps to establish a common interface for relates classes.
// It can't be instantiated.
// It focus on class inheritence and sharing common functionality.


//Example --> Suppose you're building a graphics app,and ypu want to create a hierarchy of different shapes. You can see an abstract base class shape to define common properties methods that all shpaes share.

abstract class Shape{
    constructor(protected color:string){}
    abstract calArea():number;
    abstract display():void;
}

class Circle extends Shape{
    constructor(protected color: string,protected radius:number){
        super(color);
    }
    public calArea(): number {
        return Math.PI*this.radius*this.radius;
    }
    public display(): void {
        console.log(`It is ${this.color} color and its radius is ${this.radius}`);
    }
}

const c1:Circle=new Circle("red",3);
console.log(c1.calArea());
c1.display();


class Square extends Shape{
    constructor(protected color: string,protected side:number){
        super(color);
    }
    public calArea(): number {
        return this.side*this.side;
    }
    public display(): void {
        console.log(`It is ${this.color} color and its side is ${this.side}`);
    }
}

const s2:Square=new Square("red",3);
console.log(s2.calArea());
s2.display();