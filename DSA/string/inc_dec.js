operations = ["++X", "++X", "X++"]
const finalValueAfterOperations = operations.reduce((acc, curr) => curr[1] == '+' ? ++acc : --acc, 0);
// const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)
console.log(finalValueAfterOperations);