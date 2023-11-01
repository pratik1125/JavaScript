// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let i of fruits){
    fruits2.push(i.toUpperCase());
}
console.log(fruits2)