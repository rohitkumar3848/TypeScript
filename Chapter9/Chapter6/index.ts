//Functions-->


//Declaration-->
function greet(name:string,id:number){
    console.log(`Welcome ${name}, your id is ${id}`);
}

//Call-->
greet("Rohit Kumar",1);

//Using Arrow Function-->

//Defination-->
const fn=(name:string,id:number)=>{ // by default its return type void
    console.log(`Welcome ${name}, your id is ${id}`);
}
//Calling-->
fn("Rohit Kumar",1);


//Return type-->
//Defination-->
const fn1=(name:string,id:number):string=>{ // by default its return type void
    return `Welcome ${name}, your id is ${id}`;
}

//One more way, we can define in one line also-->
// const fn1=(name:string,id:number):string=>`Welcome ${name}, your id is ${id}`;

//Calling-->
console.log(fn1("Rohit Kumar",1));


//Question check string is PALindrome-->

const isPal=(s1:string):boolean=>{
    let l=0;
    let r=s1.length-1;
    while(l<=r){
        if(s1[l]!=s1[r]){
            return  false;
        }
        l++;
        r--;
    }
    return true;

    // let myPal=s1.split("").reverse().join("");
    // return myPal===s1;
}

console.log(isPal("yamay"));


// const avg=(arr:any):Number=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }

// let arr=[1,2,3,4,5];
// console.log(avg(arr));

//using reduce method-->

const avg = (arr: number[]): number => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

let arr = [1, 2, 3, 4, 5];
console.log(avg(arr)); // Output: 3

//Find max using reduce method-->
const findMax = (arr: number[]): number => {
    return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
}

let a1 = [1, 2, 3, 4, 5];
console.log(findMax(a1)); // Output: 5
