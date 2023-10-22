const printName = (name) => `Hi, ${name}`;

const PI = 3.14;

const student = {
  name: "Drian",
  age: 18,
  //   printStudent: function () {},
  //   printStudent: () => {},
  printStudent() {
    return `Hi, my name is ${this.name} and iam ${this.age} years old`;
  },
};

class Human {
  constructor() {
    console.log("Object human created");
  }
}

// module.exports.printName = printName;
// module.exports.PI = PI;

// module.exports = {
//   printName: printName,
//   PI: PI,
//   student: student,
//   Human: Human,
// };

module.exports = { printName, PI, student, Human };
