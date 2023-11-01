//how to clone an array
let array1=["item1","item2"];
let array2=array1.slice(0);
console.log("Array1",array1);
console.log("Array2",array2);
//how to concat an array
let array3=[].concat(array2,["item3","item4"]);
console.log("Array3",array3)
//other way
let newArray=[...array1,...array3]
console.log(newArray)
array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)