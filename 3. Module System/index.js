// Core Module
const fs = require("fs");
// Local Module
// const localModule = require("./localModule");
const { printName, PI, student, Human } = require("./localModule");
// Third Party Module / on node_modules
// const moment = require("moment");

// console.log(fs);
// console.log(localModule.printName("Drian"), localModule.PI);
console.log(student.printStudent(), new Human());
// console.log(printName("Drian"), PI);
// console.log(moment);
