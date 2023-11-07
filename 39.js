 //computed properties
const key1="object1";
const key2="object2";

const value1="myvalue1";
const value2="myvalue2";
// const obj={
//     object1 : "myvalue1";
//     object2 :"myvalue2";
// }

//[] helps us to compute it
const obj={
    [key1]:value1,
    [key2]:value2,
}
console.log(obj)

//or you can use this method also
const obj1={}
obj1[key1]=value1;
obj1[key2]=value2;
console.log(obj1);
