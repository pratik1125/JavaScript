//primitive data type don't have referrnce memory 
//primitive type are stored in stack , primitive type take less memory
let num1=6;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log("After Incrementing num 1 ",num1);
console.log("After Incrementing num 2",num2);


//reference type 
let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1)
console.log("array2",array2)
array1.push("item3");
console.log("After Pushing")
console.log("array1",array1)
console.log("array2",array2)
//here array are stored in stack but the memory allocation is done in heap 
// so here in the heap it has it own address eg : 0x11 , this address
//is applied to both array 1 and array 2 so if we push item in array1 it will show 
//  the item in array2 as well or vice versa
array2.push("item69");
console.log("array1",array1)
console.log("array2",array2)
