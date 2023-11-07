// how to iterate object
const person={
        name : "pratik",
        age :22,
        "person hobbies" : ["sleeping","gyming"]

}
//for in loop
for (let key in person){
    console.log(`${key}: ${person[key]}`);
}
//object.keys
console.log( typeof (Object.keys(person)));
const va1=Array.isArray((Object.keys(person)));
console.log(va1)

for(let key of Object.keys(person)){
    console.log(person[key]);
}