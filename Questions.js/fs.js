const fs = require('fs');

console.log(1);
// sync operations
// const result = fs.readFileSync("text.txt", "utf-8")
// console.log(result);

// async operation
fs.readFile("text.txt", "utf-8", (err, text) => { console.log(text) })
console.log(2);