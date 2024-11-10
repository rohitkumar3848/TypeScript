//Functions-->
//Declaration-->
function greet(name, id) {
    console.log("Welcome ".concat(name, ", your id is ").concat(id));
}
//Call-->
greet("Rohit Kumar", 1);
//Using Arrow Function-->
//Defination-->
var fn = function (name, id) {
    console.log("Welcome ".concat(name, ", your id is ").concat(id));
};
//Calling-->
fn("Rohit Kumar", 1);
//Return type-->
//Defination-->
var fn1 = function (name, id) {
    return "Welcome ".concat(name, ", your id is ").concat(id);
};
//One more way, we can define in one line also-->
// const fn1=(name:string,id:number):string=>`Welcome ${name}, your id is ${id}`;
//Calling-->
console.log(fn1("Rohit Kumar", 1));
//Question check string is PALindrome-->
var isPal = function (s1) {
    var l = 0;
    var r = s1.length - 1;
    while (l <= r) {
        if (s1[l] != s1[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
    // let myPal=s1.split("").reverse().join("");
    // return myPal===s1;
};
console.log(isPal("yamay"));
var avg = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
var arr = [1, 2, 3, 4, 5];
console.log(avg(arr));
