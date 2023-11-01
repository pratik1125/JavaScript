// undefined 
// null

let firstName;
console.log(typeof firstName);
firstName = "pratik";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);

myVariable = "pratik";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
//bug , error its show type of null is object


//BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);
//Adding bigint is like bigInt+Bigint you can't do int+Bigint the error will occur
