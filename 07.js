//string operation
//trim() is used to remove empty spaces between the string
//string are immutable 
// means once the string is declare in a variable it cannot be change , but to change it you need to declare it in new variable 
let firstName='      Pratik     ';
console.log(firstName);
let nameFirst=firstName.trim();
 console.log(nameFirst);
 //new is used to define constructor 
 //or you can use this method 
 firstName=firstName.trim();
 console.log(firstName);
 //toUpperCase() this method is used to change lowercase letter in string to Uppper Case .
 let Uppername="kashika";
 console.log(Uppername.toUpperCase());
 //or you can use this method
 let newcase=Uppername.toUpperCase();
 console.log(newcase.toUpperCase());
 //toLowerCase is a Method to Change the uppercase letter in string to LowerCase.
 let lowername='IRA';
 console.log(lowername.toLowerCase());
 //or you can use exitsing method .
 //slice() in this method you give (start index,end index) 
 // if the string is pratik so you just want prat as an output , you need to slice(0,4) because the last index is not included .

let sliceString='kashika'
console.log(sliceString.slice(0,5));