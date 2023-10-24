// Core module
// File system
const fs = require("node:fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

// Write string to file synchronous
// try {
//   fs.writeFileSync("data/testSynchronous.txt", "Hello World Synchronous");
// } catch (error) {
//   console.log(error.message);
// }

// Write string to file asynchronous
// fs.writeFile(
//   "data/testAsynchronous.txt",
//   "Hello World from asynchronous",
//   (e) => {
//     console.log(e);
//   }
// );

// Read the content of the file Synchronous
// const data = fs.readFileSync("data/testSynchronous.txt", "utf-8");

// console.log(data);

// Read the content of the file Asynchronous
// fs.readFile("data/testAsynchronous.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

const rl = readline.createInterface({ input, output });

rl.question("What your name?", (name) => {
  rl.question("age?", (age) => {
    const person = { name, age };
    const file = fs.readFileSync("data/persons.json", "utf-8");
    const persons = JSON.parse(file);

    persons.push(person);

    fs.writeFileSync("data/persons.json", JSON.stringify(persons));

    console.log(`Thank you ${name}`);
    rl.close();
  });
});
