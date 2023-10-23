// Core module
// File system
const fs = require("node:fs");

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
fs.readFile("data/testAsynchronous.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
