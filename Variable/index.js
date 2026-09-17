// Author: Natnael Getachew


var name= "John";
var person= 10;

person= 10;
console.log(person);
console.log(typeof person);

person= [20, 30, 40];

console.log(person);
console.log(typeof person);

person= {
    firstName: "John",
    lastName: "Doe"
};
console.log(typeof person);

person++; // increament
console.log(typeof person);

let rvar="21"; // we use let to declare a variable and const to declare a constant variable

let result = person === rvar; // comparison operator
console.log(result);

