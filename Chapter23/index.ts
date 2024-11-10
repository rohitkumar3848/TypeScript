//Interface vs Type-->


//1.
//  Ues custom types when you need unions, intersections, or mapped types.
//  Use interfaces when defining objects shapes or classes that adhere to a contact.

//2.
// Interface can extends other interfaces to inherit thier numbers.
// Custom types can use unions and intersections for more complex type composition.

// same Interface name treated as one-->
// Using type for unions and intersections
type Stud = {
    name: string;
    age: number;
};
type StudAdd = {
    city: string;
    state: string;
};

// Intersection type - requires all properties
const BioDataI: Stud & StudAdd = {
    name: "Rohit",
    age: 21,
    city: "BBA",
    state: "UP",
};

// Union type - requires at least one type
const BioDataU: Stud | StudAdd = {
    name: "Rohit",
    age: 21,
    city: "BBA",
    state: "UP",
};

console.log(BioDataU);

// Using interface for extending and implementing
interface Stud1 {
    name: string;
    age: number;
}
interface StudAdd1 {
    city: string;
    state: string;
}

interface Data extends Stud1, StudAdd1 {}

// Implementing the Data interface in a class
class BioData1 implements Data {
    constructor(public name: string, public age: number, public city: string, public state: string) {}
}

const std1 = new BioData1("Rohit", 21, "BB", "UK");
console.log(std1);
