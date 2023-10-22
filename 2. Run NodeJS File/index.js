// 1
// console.log("Hello world");
// const myName = "Drian";

// 2
// const printName = (name) => `Hi, my name is ${name}`;

// console.log(printName(myName));

// 3
// can't use it on node
// console.log(window);
// console.log(window.alert("log"));

// 4
// alse can't use it on node
// function printName(name) {
//   return `Hi, my name is ${name}`;
// }

// console.log(window.printName(myName));

// 5
// require("./test");

// console.log("Hello world");

// 6
// Module system
const printName = require("./test");

console.log(printName("Drian from index js"));
