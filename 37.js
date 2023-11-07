//difference between dot and bracket notation
const key="email";
const phone="Contact No";
const person={
    name : "Pratik",
    age : 22,
    "person Hobbies":['gyming','sleeping']
}
console.log(person["person Hobbies"]);
person[key]="sawantpratik964@gmail.com";
person[phone]=8451893488;
console.log(person);