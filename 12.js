//boolean are True or false
console.log(5>6);
//comparison operator
//== or ===
let num1=55;
let num2=66;
if (num1>num2) {
    console.log("its Greater")
} else{
    console.log("Not Greater")
}
console.log(num1==num2);

let num3='55';
let num4=55;
console.log(num3==num4)//here it will return ture value because == operator do not check the datatype value
// if the string datatype and number datatype contain the same value it will print true.
let num5='55';
let num6=55;
console.log(num5===num6);//this will strictly check for both value and datatype of the declared variable
//!= and !==
console.log(num3!=num4)// here its false because it does not not check the value of datatype
//BUT
console.log(num3!==num4);//here it striclty check for both value and datatype
